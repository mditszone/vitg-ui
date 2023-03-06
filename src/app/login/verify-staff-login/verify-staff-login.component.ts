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
  verificationRef: string = "";
  subscription: Subscription = new Subscription;
  errorMessage: string = "";
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
      width: '40px',
      height: '40px',
    },
  };

  onOtpChange(otp: string) {
    this.otp = otp;
  }
  handleClick() {
    console.log(this.otp);
    var data = JSON.parse(sessionStorage.getItem('send_otp') || '{}');
    console.log(data)
    
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    let obj = {
      phoneNumber: data.phoneNumber,
      otp: this.otp,
      verificationRef: data.verificationRef
    }
    console.log(obj);

    //this.loginService.verifyOTP(obj).subscribe(data => console.log(data));

    this.subscription = this.loginService.verifyOTP(obj).subscribe((data: any) => {
      console.log("verify");
      console.log(data);
      sessionStorage.setItem('staff_dto', JSON.stringify(data));

      if(data.vitgStaffDTO){
        this.router.navigate(['/dashboard']);
      }
      if(data.trainerDTO){
        
      this.router.navigate(['/materialScreen']);
      }
    });


      this.router.navigate(['/dashboard']);
    // },
    //   (error) => {

    //     this.errorMessage = error.error.message;
    //     alert(this.errorMessage)
    //     console.log(this.errorMessage)
    //   }
  });

  }
  resend() {
    let data = JSON.parse(sessionStorage.getItem('send_otp') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.loginService.sendOTP('/api/auth/login/sendOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      console.log(this.message);
      sessionStorage.setItem('send_otp', JSON.stringify(data));
    }
    );
  }
}