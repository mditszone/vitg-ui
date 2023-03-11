import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-training-mode',
  templateUrl: './training-mode.component.html',
  styleUrls: ['./training-mode.component.scss']
})
export class TrainingModeComponent implements OnInit {

  subCourseDetailsForm: any;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any;
  subCourseId: any

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      trainingMode: ['', [Validators.required]]


    }),
      this.patchValue();
  }

  patchValue() {
    var response = JSON.parse(sessionStorage.getItem('tabServiceData') || '{}')
    {
      if (response.id) {
        this.subCourseId = response.id;
        console.log(this.subCourseId)
      }
      else {
        this.subCourseId = response;
        console.log(this.subCourseId)
      }
      this.courseService.getSubCourseById(this.subCourseId).subscribe((subCourse) => {
        console.log(subCourse);
        this.subCoursedata = subCourse;
        console.log(this.subCoursedata)
      })
    }
    this.subCourseDetailsForm.patchValue({
      trainingMode: this.subCoursedata.trainingMode
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.trainingMode = this.subCourseForm.trainingMode;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        this.router.navigate(['/subCourseTab/youtubeUrl'], { queryParams: { id: data['id'],skipLocationChange: true} });
      })
    }

  }

}
