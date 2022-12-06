import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-exam-certification',
  templateUrl: './exam-certification.component.html',
  styleUrls: ['./exam-certification.component.scss']
})
export class ExamCertificationComponent implements OnInit {

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
      examCertification: ['', [Validators.required]]
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
        this.router.navigate(['/subCourseTab/trainingMode'],{queryParams: {id: data['id']}});
      })
    }

  }

}
