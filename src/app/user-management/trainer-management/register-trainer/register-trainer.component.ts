import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.scss']
})
export class RegisterTrainerComponent implements OnInit {

 
  subscription: Subscription = new Subscription;
  trainerRegister: FormGroup = new FormGroup({});
  submitted = false;
  message: string = "";
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router) { }
  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit() {

    this.trainerRegister = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.trainerRegister.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.trainerRegister.invalid) {
      return;
    }
    else {
      let phonenumber = '91' + this.trainerRegister.value.phonenumber;

      this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/trainer/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
        this.message = data;
        console.log(data.phoneNumber);

        localStorage.setItem('trainer_send_otp_response', JSON.stringify(data));
        this.router.navigate(['/verifyTrainer']);

        (error: any) =>
          this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      });
    }
  }

}
