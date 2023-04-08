import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/shared/model/student';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-verify-student',
  templateUrl: './verify-student.component.html',
  styleUrls: ['./verify-student.component.scss']
})
export class VerifyStudentComponent implements OnInit {

  otp!: string;
  phoneNumber: string = "";
  verificationRef: string = "";
  studentDTO!: Student;
  subscription: Subscription = new Subscription;
  errorMessage: string = "";
  message: string = "";

  constructor(
    private registrationService: RegistrationService,
    private router: Router) { }

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit(): void {
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }
  handleClick() {
    console.log(this.otp);
    var data = JSON.parse(sessionStorage.getItem('student_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);

    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef: this.verificationRef
    }

    this.subscription = this.registrationService.verifyStudentOTP(obj).subscribe((data: any) => {
      console.log(data)
      this.studentDTO = data;
      sessionStorage.setItem('student_dto', JSON.stringify(data));


      if (this.studentDTO.registrationStatus) {
        this.router.navigate(['/material/batch']);
      } else {
        this.router.navigate(['/addStudent'],
          {
            queryParams: { data: btoa(JSON.stringify(this.studentDTO)) }
          });
      }
    },
      (error) => {
        this.errorMessage = error.error.message;
        alert(this.errorMessage)
        console.log(this.errorMessage)
    })
  }
  resend() {
    let data = JSON.parse(sessionStorage.getItem('student_send_otp_response') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/student/sendOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      sessionStorage.setItem('student_send_otp_response', JSON.stringify(data));
    }
    );
  }
}