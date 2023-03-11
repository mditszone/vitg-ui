import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { RadioValue } from 'src/app/shared/model/radio_value';
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
  batchForm: any;
  submitted!: boolean;
  courseList: any;
  trainerList: any
  selectedTrainer: String = "";
  selectedStatus?: String;
  status: RadioValue[] = [{name: 'Enable', status: false}, {name: 'Disable', status: false}] 

  constructor(public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public batchService: BatchService,
    public courseService: CourseService,
    public router: Router) { }

  ngOnInit(): void {
    this.batchDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      trainerName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    });

    this.getCoursesList();
    this.patchValue();
    this.getTrainerList(this.data);
    
  }

  statusOnChange(event) {
    this.selectedStatus = event.value;
    console.log(this.selectedStatus);
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      this.courseList = data;
      console.log(this.courseList)
    });
  }

  getTrainerList(data: any) {
    this.route.snapshot.params['id']
    this.courseService.getTrainerListByCourseId(data.value.id).subscribe((data: Batch) => {
      this.trainerList = data;
    })
  }

  get f() { return this.batchDetailsForm.controls; }


  patchValue() {
    let id = this.route.snapshot.params['id']
    this.batchService.getBatchById(id).subscribe((data: Batch) => {
      this.batchdata = data;
      console.log(this.batchdata);
      console.log("status", this.batchdata.status);
    if (this.batchdata.status) {
      this.status[0].status = true;
    } else {
      this.status[1].status = true;
    }

    console.log(this.status);
    })

    //this.selectedTrainer = this.batchdata.trainerCourse.trainerName;
    

    this.batchDetailsForm.patchValue({
      name: this.batchdata.name,
      courseId: this.batchdata.courseId,
      trainerName: this.batchdata.trainerName,
      startDate: this.batchdata.startDate,
      endDate: this.batchdata.endDate,
      startTime: this.batchdata.startTime,
      endTime: this.batchdata.endTime,
    })

   

  }

  updateBatch() {
    this.submitted = true;
    if (this.batchDetailsForm.invalid) {
      return
    }
    else {
      this.batchForm = this.batchDetailsForm.value;

      this.batchdata.id = this.batchForm.id;
      this.batchdata.name = this.batchForm.name;
      this.batchdata.courseId = this.batchForm.courseId;
      this.batchdata.trainerCourse = this.batchForm.trainerName;
      this.batchdata.startDate = this.batchForm.startDate;
      this.batchdata.endDate = this.batchForm.endDate;
      this.batchdata.startTime = this.batchForm.startTime;
      this.batchdata.endTime = this.batchForm.endTime;
      console.log(this.selectedStatus);
      if (this.selectedStatus == 'Enable') this.batchdata.status = 'ACTIVE';
      else this.batchdata.status = 'INACTIVE';

      console.log(this.batchdata)

      this.batchService.updateBatch(this.batchdata).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/batches'],{skipLocationChange: true})
      })

    }

  }
}




