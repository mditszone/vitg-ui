import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Faculty } from 'src/app/shared/model/faculty';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {
  subscription: Subscription = new Subscription;
  studentRegister: FormGroup = new FormGroup({});
  trainerLogin: FormGroup = new FormGroup({});
  faculty: Faculty = new Faculty();
  submitted = false;
  message: string = "";
  errorMessage: string = "";
  userNameArray: Array<any>;
  input:string

  constructor(private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private userService: UserService) { }
  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    this.studentRegister = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]]
    });
    this.trainerLogin = this.formBuilder.group({
      userName: ['', [Validators.required]]
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.studentRegister.controls, this.trainerLogin.controls; }

  onSubmitTrainer() {
    this.input = this.faculty.userName
    this.userService.getAllFaculty().subscribe(response => {
      for (let array of response) {
        let id = array.id
        let name = array.userName
        if(this.input === name){
          let obj = {
            id:id,
            userName:this.input
          }
          this.userService.facultyLogin(obj).subscribe(response=>{
            this.router.navigate(['verifyTrainerLogin'])
            sessionStorage.setItem('trainer_pin', JSON.stringify(response))
          })
        }
      }
    })
  }

  onSubmitStudent() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentRegister.invalid) {
      return;
    }
    else {
      let phonenumber = '91' + this.studentRegister.value.phonenumber;

      this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/student/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
        this.message = data;
        console.log(data)
        console.log(data.phoneNumber);

        sessionStorage.setItem('student_send_otp_response', JSON.stringify(data))
        this.router.navigate(['/verifyStudent']);

        (error: any) =>
          this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      });
    }
  }
}