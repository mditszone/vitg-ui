import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Batch } from 'src/app/shared/model/batch';
import { Sms } from 'src/app/shared/model/sms';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss']
})
export class SendSmsComponent implements OnInit {

  response: String = '';
  display_status: boolean = false;
  batchList:  Batch[] = [];
  batchDropdown: null | Batch = null;
  smsForm: any;

  constructor(private batchService: BatchService, private formBuilder: FormBuilder) {

    this.smsForm = this.formBuilder.group({
      batch: ['', [Validators.required]],
      message: ['', [Validators.required]],
      emails: [''],
      student: [''],
      trainer: [''],
      organizer: [''],
    });


    this.batchService.getAllBatches().subscribe((data: Batch[]) => {
      this.batchList = data;
      console.log(this.batchList)
    });
   }
   
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.smsForm);
    const formData = this.smsForm.value;
    let arrayOfPhoneNumbers: String[] = [];

    if (formData.emails.length > 0) {
        arrayOfPhoneNumbers = formData.emails.split(", ").map(item => '91' + item.trim());
        console.log(arrayOfPhoneNumbers);
    }

    const trainerId = formData.batch.trainerCourse.trainerId;
    const sms: Sms = new Sms();
    sms.batchId = formData.batch.id;
    sms.message = formData.message;
    sms.sendStudents = formData.student === "" || formData.student === false ? false : true;
    sms.sendTrainer = formData.trainer === "" || formData.trainer === false ? false : true;
    sms.sendOrganizer = formData.organizer === "" || formData.organizer === false ? false : true;
    sms.emails = arrayOfPhoneNumbers;
    sms.trainerId = trainerId;
    console.log(sms);
    this.batchService.sendSMS(sms).subscribe(data => {
      this.response = JSON.stringify(data, undefined, 4);
      this.display_status = true;
    });

  }

}
