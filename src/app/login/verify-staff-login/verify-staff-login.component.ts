import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-verify-staff-login',
  templateUrl: './verify-staff-login.component.html',
  styleUrls: ['./verify-staff-login.component.scss']
})
export class VerifyStaffLoginComponent implements OnInit {

  otp!: string;
  verify: any;
  phoneNumber: string = "";
  verificationRef: string ="";
  subscription: Subscription = new Subscription;
  errorMessage: string="";
  message: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

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

  onOtpChange(otp: string) {
    this.otp = otp;
  }
  handleClick() {
    console.log(this.otp);
    var data = JSON.parse(localStorage.getItem('send_staffLoginOtp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;


    console.log(data.phoneNumber);
    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef:this.verificationRef
    }
    this.subscription = this.loginService.verifyOTP(obj).subscribe((data: any) => {
      sessionStorage.setItem('staffLogin', JSON.stringify(data));
      localStorage.setItem('staffLogin', JSON.stringify(data));
      this.router.navigate(['/dashboard']);
    },
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
        
      }
    );
  }
  resend() {
    let data = JSON.parse(localStorage.getItem('staffLogin') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.loginService.sendOTP('/api/auth/login/sendOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      console.log(this.message);
      localStorage.setItem('staffLogin', JSON.stringify(data));
    }
    );
  }
}