import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  id!: any;
  courseDetailsForm: FormGroup = new FormGroup({});
  coursedata!: Course;
  submitted = false;
  courseForm: any;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.courseDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      status: [null, [Validators.required,]]
    });

    this.patchValue();
  }

  get f() {
    return this.courseDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.courseService.getCourseById(this.id).subscribe((data: Course) => {
      this.coursedata = data;
      console.log(this.coursedata)
    });

    this.courseDetailsForm.patchValue({
      id: this.coursedata.id,
      name: this.coursedata.name,
      status: this.coursedata.status,
    });
    console.log(this.coursedata.status)
  }


  onSubmitUpdateCourse() {
    this.submitted = true;

    if (this.courseDetailsForm.invalid) {
      return
    }
    else {
      this.courseForm = this.courseDetailsForm.value;

      this.coursedata.id = this.courseForm.id;
      this.coursedata.name = this.courseForm.name;
      this.coursedata.status = this.courseForm.status;
      console.log(this.coursedata.status)

      this.courseService.updateCourse(this.coursedata).subscribe(data => {
        this.coursedata = data;
        console.log(this.coursedata)
        this.router.navigate(['/course'],{skipLocationChange: true})
      })
    }

  }
}