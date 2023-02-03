import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/model/student';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  studentDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  studentdata!: Student;
  rolesList: any;
  studentForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public route: ActivatedRoute,
    public router: Router,) { }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.studentDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      phoneNumber: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
    });
    this.patchValue();
  }
  get f() {
    return this.studentDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.userService.getStudentById(this.id).subscribe((data: Student) => {
      this.studentdata = data;
    });
    this.studentDetailsForm.patchValue({
      id: this.studentdata.id,
      phoneNumber: this.studentdata.phoneNumber,
      name: this.studentdata.name,
      email: this.studentdata.email
    });
  }

  onSubmitUpdateStudent() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentDetailsForm.invalid) {
      return;
    }
    else {
      this.studentForm = this.studentDetailsForm.value;

      this.studentdata.id = this.studentForm.id;
      this.studentdata.phoneNumber = this.studentForm.phoneNumber;
      this.studentdata.name = this.studentForm.name;
      this.studentdata.email = this.studentForm.email;

      console.log(this.studentdata)

      this.userService.updateStudentinfo(this.studentdata).subscribe(data => {
        this.studentdata = data;
        console.log(data)
        this.router.navigate(['/studentTab/access'], { queryParams: { id: data['id'] } })
      })
    }
  }

}
