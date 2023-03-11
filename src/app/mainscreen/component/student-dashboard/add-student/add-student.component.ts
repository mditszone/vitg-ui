import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/model/student';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
}) 
export class AddStudentComponent implements OnInit {

  student: Student =new Student();
  submitted = false;
  data: any;
  errorMessage: any;
  studentForm: any;

  studentDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
  });

  constructor(private router: Router, private userService: UserService,public route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patchValue();
  }

  // convenience getter for easy access to form fields
  get f() { return this.studentDetailsForm.controls; }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);

      this.studentDetailsForm.patchValue({
        id: this.data.id,
        phoneNumber: this.data.phoneNumber,
        name: this.data.name,
        gender:this.data.gender,
        email: this.data.email
      });
    });
  }

  updateStudentInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.studentDetailsForm.invalid) {
      return;
    }
    else {
      this.studentForm = this.studentDetailsForm.value;
      let id = this.studentDetailsForm.value.id;

      this.student.id = this.studentForm.id
      this.student.phoneNumber = this.studentForm.phoneNumber
      this.student.name = this.studentForm.name
      this.student.gender = this.studentForm.gender
      this.student.email = this.studentForm.email
      
      console.log(this.student);

      this.userService.updateStudentinfo(this.student).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/materialScreen'],{skipLocationChange: true});
        },
        (error) => {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
        });
    }
  }
}
