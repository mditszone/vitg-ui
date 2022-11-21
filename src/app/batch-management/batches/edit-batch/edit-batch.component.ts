import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { Topic } from 'src/app/shared/model/topic';
import { BatchService } from 'src/app/shared/services/batch.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.scss']
})
export class EditBatchComponent implements OnInit {

  batch: Batch = new Batch();
  batchDetailsForm: any;
  batchdata!: Batch;
  data: any;
  id!: number;
  batchForm: any;
  submitted!: boolean;
  events: string[] = [];


  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public batchService: BatchService, public courseService: CourseService,
    public router: Router) { }


    
  ngOnInit(): void {
    this.batchDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      
    })
    this.patchValue();

  }
  get f() { return this.batchDetailsForm.controls; }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.batchService.getBatchById(this.id).subscribe((data: Batch) => {
      this.batchdata = data;
    })
    this.batchDetailsForm.patchValue({

      name: this.batchdata.name
    })

    this.batchDetailsForm.patchValue({
      name: this.batchdata.startDate
    })
    this.batchDetailsForm.patchValue({
      name: this.batchdata.endDate
    })
    this.batchDetailsForm.patchValue({
      name: this.batchdata.startTime
    })
    this.batchDetailsForm.patchValue({
      name: this.batchdata.endTime
    })
  }
  //   @Output()
  // dateChange: EventEmitter<MatDatepickerInputEvent<any>> = new EventEmitter();

  // onDateChange(): void {
  //     this.dateChange.emit();
  // }

  updateBatch() {
    this.submitted = true;
    if (this.batchDetailsForm.invalid) {
      return
    }
    else {
      this.batchForm = this.batchDetailsForm.value;

      this.batchdata.id = this.batchForm.id;
      this.batchdata.name = this.batchForm.name;

      this.batchdata.startDate = this.batchForm.startDate;
      this.batchdata.endDate = this.batchForm.endDate;
      this.batchdata.startTime = this.batchForm.startTime;
      this.batchdata.endTime = this.batchForm.endTime;
      this.batchService.updateBatch(this.batchdata).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/batches'])
      })
    }
    
  }
}




