import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.scss']
})
export class BatchRegisterComponent implements OnInit {

  response: String = '';
  display_status: boolean = false;
  batchList:  Batch[] = [];
  batchDropdown: null | Batch = null;
  smsForm: any;
  
  constructor(private batchService: BatchService, private formBuilder: FormBuilder) {
    this.batchService.getAllBatches().subscribe((data: Batch[]) => {
      this.batchList = data;
      console.log(this.batchList)
    });
    this.smsForm = this.formBuilder.group({
      batch: ['', [Validators.required]],
      message: ['', [Validators.required]],
      emails: [''],
      student: [''],
      trainer: [''],
      organizer: [''],
    });
   }

  ngOnInit(): void {
  }

}
