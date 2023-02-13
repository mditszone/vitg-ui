import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trainer } from 'src/app/shared/model/trainer';
import { RegistrationService } from 'src/app/shared/services/registration.service';
@Component({
  selector: 'app-verify-trainer',
  templateUrl: './verify-trainer.component.html',
  styleUrls: ['./verify-trainer.component.scss']
})
export class VerifyTrainerComponent implements OnInit {

  otp!: string;
  phoneNumber: string = "";
  verificationRef: string = "";
  trainerDTO!: Trainer;
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
    var data = JSON.parse(localStorage.getItem('trainer_send_otp_response') || '{}');
    this.phoneNumber = data.phoneNumber;
    this.verificationRef = data.verificationRef;

    console.log(data.phoneNumber);

    let obj = {
      phoneNumber: this.phoneNumber,
      otp: this.otp,
      verificationRef: this.verificationRef
    }

    this.subscription = this.registrationService.verifyTrainerOTP(obj).subscribe((data: any) => {

      this.trainerDTO = data;
      this.router.navigate(['/addTrainer'],
        {
          queryParams: { data: btoa(JSON.stringify(this.trainerDTO)) }
        });
      },
      (error) => {
        this.errorMessage = error.error.message;
        alert(this.errorMessage)
        console.log(this.errorMessage);
    });
  }

  resend() {
    let data = JSON.parse(localStorage.getItem('trainer_send_otp_response') || '{}');
    console.log(data)
    console.log(data.phoneNumber)

    this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/trainer/verifyOtp/', `?phoneNumber=${data.phoneNumber}`).subscribe((data: any) => {
      this.message = data;
      console.log(this.message);
      localStorage.setItem('trainer_send_otp_response', JSON.stringify(data));
    }
    );
  }
}

