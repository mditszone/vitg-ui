import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.scss']
})
export class BatchRegisterComponent implements OnInit {

  response: String = '';
  display_status: boolean = false;
  batchList: Batch[] = [];
  batchDropdown: null | Batch = null;
  batchRegisterForm: FormGroup;
  studentName: string;

  constructor(private batchService: BatchService, private formBuilder: FormBuilder, private userService: UserService) {
    this.batchService.getAllBatches().subscribe((data: Batch[]) => {
      this.batchList = data;
      console.log(this.batchList)
    });
    this.batchRegisterForm = this.formBuilder.group({
      batch: ['', [Validators.required]],
      studentId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
  }

  onChange() {
    const stuentId: number = this.batchRegisterForm.value.studentId;
    this.studentName = '';
    this.userService.getStudentById(stuentId).subscribe(data => this.studentName = `ID: ${data.id}, name: ${data.name}` );
  }

}


class SelectedStudent {
  id!: number;
  name!: string;
}