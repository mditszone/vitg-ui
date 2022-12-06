import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-duration-hours',
  templateUrl: './duration-hours.component.html',
  styleUrls: ['./duration-hours.component.scss']
})
export class DurationHoursComponent implements OnInit {

  subCourseDetailsForm: any;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      durationHours: ['', [Validators.required]]

    }),
      this.patchValue();
  }

  patchValue() {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      let subCourseId: number = parseInt(params["id"]);
      this.courseService.getSubCourseById(subCourseId).subscribe((subCourse) => {
        console.log(subCourse);
        this.subCoursedata = subCourse;
        console.log(this.subCoursedata)
      })
    })

    this.subCourseDetailsForm.patchValue({
      durationHours: this.subCoursedata.durationHours
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.durationHours = this.subCourseForm.durationHours;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        console.log(this.subCoursedata);
        this.router.navigate(['/subCourseTab/fee'], { queryParams: { id: data['id'] } })
      })
    }

  }

}
