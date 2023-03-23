import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-duration-days',
  templateUrl: './duration-days.component.html',
  styleUrls: ['./duration-days.component.scss']
})
export class DurationDaysComponent implements OnInit {

  @Input() item: any = Subcourse;

  subCourseDetailsForm: any;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any;
  subCourseId: any

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      durationDays: ['', [Validators.required]]

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
      })
    }
    this.subCourseDetailsForm.patchValue({
      durationDays: this.subCoursedata.durationDays
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.durationDays = this.subCourseForm.durationDays;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        this.router.navigate(['/subCourseTab/durationHours'], { queryParams: { id: data['id']} })
      })
    }

  }

}
