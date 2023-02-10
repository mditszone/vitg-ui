import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-exam-certification',
  templateUrl: './exam-certification.component.html',
  styleUrls: ['./exam-certification.component.scss']
})
export class ExamCertificationComponent implements OnInit {

  subCourseDetailsForm: any;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any;
  subCourseId: any

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      examCertification: ['', [Validators.required]]
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
      examCertification: this.subCoursedata.examCertification
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.examCertification = this.subCourseForm.examCertification;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        console.log(this.subCoursedata);
        this.router.navigate(['/subCourseTab/trainingMode'], { queryParams: { id: data['id'] } });
      })
    }
  }
}
