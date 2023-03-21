import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Staff } from 'src/app/shared/model/staff';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-verify-staff',
  templateUrl: './verify-staff.component.html',
  styleUrls: ['./verify-staff.component.scss']
})
export class VerifyStaffComponent implements OnInit {
  otp!: string;
  phoneNumber: string = "";
  verificationRef: string = "";
  staffDTO!: Staff;
  subscription: Subscription = new Subscription;
  errorMessage: string = "";
  message: string = "";

  constructor(private registrationService: RegistrationService, private router: Router) { }

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
    var data = JSON.parse(localStorage.getItem('staff_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);

    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef: this.verificationRef
    }

    this.subscription = this.registrationService.verifyStaffOTP(obj).subscribe((data: any) => {

      this.staffDTO = data;
      this.router.navigate(['/addStaff'],
        {
          queryParams: { data: btoa(JSON.stringify(this.staffDTO)) },
        });
    },
      (error) => {
        this.errorMessage = error.error.message;
        alert(this.errorMessage)
        console.log(this.errorMessage);
      });
  }
  resend() {
    let data = JSON.parse(localStorage.getItem('staff_send_otp_response') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/staff/sendOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      console.log(this.message);
      localStorage.setItem('staff_send_otp_response', JSON.stringify(data));
    }
    );
  }
}
