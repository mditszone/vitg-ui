import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-sub-course-name',
  templateUrl: './sub-course-name.component.html',
  styleUrls: ['./sub-course-name.component.scss']
})
export class SubCourseNameComponent implements OnInit {

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
      name: ['', [Validators.required]]
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
        this.subCoursedata = subCourse;
        console.log(this.subCoursedata)
      })
    }
    this.subCourseDetailsForm.patchValue({
      name: this.subCoursedata.name,
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.name = this.subCourseForm.name;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        this.router.navigate(['/subCourseTab/overview']);
      })
    }

  }

}
