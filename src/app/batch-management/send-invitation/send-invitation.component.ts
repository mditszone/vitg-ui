import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Batch } from 'src/app/shared/model/batch';
import { Email } from 'src/app/shared/model/email';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  response: String = '';
  display_status: boolean = false;
  batchList:  Batch[] = [];
  batchDropdown: null | Batch = null;
  emailForm: any;

  constructor(private batchService: BatchService, private formBuilder: FormBuilder) {

    this.emailForm = this.formBuilder.group({
      batch: ['', [Validators.required]],
      message: ['', [Validators.required]],
      emails: [''],
      students: [''],
      trainers: [''],
      organizer: ['']
    });

    this.batchService.getAllBatches().subscribe((data: Batch[]) => {
      this.batchList = data;
    });
   }


  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.emailForm);
    const formData = this.emailForm.value;
    const trainerId = formData.batch.trainerCourse.trainerId;
    console.log(formData.batch.name);
    let arrayOfEmails: String[] = [];

    if (formData.emails.length > 0) {
        arrayOfEmails = formData.emails.split(", ").map(item => item.trim());
        console.log(arrayOfEmails);
    }

    let emailData: Email = new Email();
    emailData.batchId = formData.batch.id;
    emailData.subject = formData.batch.name;
    emailData.message = formData.message;
    emailData.sendStudents = formData.students == "" || formData.student === false ? false : true;
    emailData.sendTrainer = formData.trainers === "" || formData.trainers === false ? false : true;
    emailData.sendOrganizer = formData.organizer === "" || formData.organizer === false ? false : true;
    emailData.trainerId = trainerId;
    emailData.emails = arrayOfEmails;
    emailData.url = `http://localhost:4200/viewbatch/${formData.batch.id}`;
    console.log(emailData);

    this.batchService.sendEmail(emailData).subscribe(data => {
      this.response = JSON.stringify(data, undefined, 4);
      this.display_status = true;
    });

  }

}
