
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timestamp } from 'rxjs/internal/operators/timestamp';
import { Batch } from 'src/app/shared/model/batch';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { Topic } from 'src/app/shared/model/topic';
import { Trainer } from 'src/app/shared/model/trainer';
import { BatchService } from 'src/app/shared/services/batch.service';
import { CourseService } from 'src/app/shared/services/course.service';
import { UserService } from 'src/app/shared/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss']
})
export class AddBatchComponent implements OnInit {

  batch: Batch = new Batch();
  batchDetailsForm: any;
  submitted!: boolean;
  courseList: any;
  subCourseListById: any;
  trainerListById: any;
  organizersList: any;
  data: any;
  id!: number;
  batchForm: any;
  errorMessage: any;
  minStartDate = new Date();

  constructor(private formBuilder: FormBuilder, private router: Router,
    private route: ActivatedRoute, private courseService: CourseService,
    private batchService: BatchService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    console.log("data")
    this.batchDetailsForm = this.formBuilder.group({
      courseId: ['', [Validators.required]],
      trainerCourse: ['', [Validators.required]],
      name: ['', [Validators.required]],
      //organizers: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],

    }),
      this.getCoursesList();
    this.getTrainerList(this.data);
    //this.getOrganizersList();
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      console.log(data);
      this.courseList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }

  getTrainerList(data: any) {
    this.route.snapshot.params['id']
    this.courseService.getTrainerListByCourseId(data.value.id).subscribe((data: Batch) => {
      console.log(data);
      this.trainerListById = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }
  // getOrganizersList() {
  //   this.batchService.getOrganizersList().subscribe((data: any) => {
  //     console.log(data);
  //     this.organizersList = data;
  //     (error: any) =>
  //       this.errorMessage = error;
  //   });
  // }
  get f() { return this.batchDetailsForm.controls; }

  patchValue() {

    this.batchDetailsForm.patchValue({
      courseId: this.data.courseId,
      trainerCourse: this.data.trainerCourse,
      name: this.data.name,
      //organizers: this.data.organizers,
      batchName: this.data.batchName,
      startDate: this.data.startDate,
      endDate: this.data.endDate,
      startTime: this.data.startTime,
      endTime: this.data.endTime
    });
  }
  createBatch() {
    this.submitted = true;
    if
      (this.batchDetailsForm.invalid) {
      return;
    }
    else {
      this.batchForm = this.batchDetailsForm.value;

      this.batch.courseId = this.batchForm.courseId;
      this.batch.trainerCourse = this.batchForm.trainerCourse;
      this.batch.name = this.batchForm.name;
      //this.batch.organizers = this.batchForm.organizers;
      this.batch.startDate = this.batchForm.startDate;
      this.batch.endDate = this.batchForm.endDate;
      this.batch.startTime = this.batchForm.startTime;
      this.batch.endTime = this.batchForm.endTime;

      this.batchService.createBatch(this.batch).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/batches']);
        });
    }
  }
};

