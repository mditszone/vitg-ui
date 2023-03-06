import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {
  subscription: Subscription = new Subscription;
  studentRegister: FormGroup = new FormGroup({});
  submitted = false;
  message: string = "";
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router,) { }
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
  }
  // convenience getter for easy access to form fields
  get f() { return this.studentRegister.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.studentRegister.invalid) {
      return;
    }
    else {
      let phonenumber = '91' + this.studentRegister.value.phonenumber;

      this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/student/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
        this.message = data;
        console.log(data.phoneNumber);
        
        sessionStorage.setItem('student_send_otp_response',JSON.stringify(data))
        this.router.navigate(['/verifyStudent']);

        (error: any) =>
          this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      });
    }
  }

}

























// import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { RegistrationService } from 'src/app/shared/services/registration.service';
// import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';

// @Component({
//   selector: 'app-student-register',
//   templateUrl: './student-register.component.html',
//   styleUrls: ['./student-register.component.scss']
// })

// export class StudentRegisterComponent implements AfterViewInit {
//   subscription: Subscription = new Subscription;
//   studentRegister: FormGroup = new FormGroup({});
//   submitted = false;
//   message: string = "";
//   errorMessage: string = "";
//   separateDialCode = false;
//   @ViewChild(NgxMatIntlTelInputComponent) phoneInput: any;


//   phoneForm = new FormGroup({
//     phone: new FormControl('', [Validators.required]),
//   });

//   onSubmit() {
//     console.log('onSubmit', this.phoneForm);
//   }




//   onReset() {
//     this.phoneForm.reset();
//   }

//   ngAfterViewInit() {
//     this.phoneInput.matMenu.panelClass = 'custom-panel';
//   }

//   constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService, private router: Router,) { }
//   //only number will be add
//   keyPress(event: any) {
//     const pattern = /[0-9\+\-\ ]/;
//     let inputChar = String.fromCharCode(event.charCode);
//     if (event.keyCode != 8 && !pattern.test(inputChar)) {
//       event.preventDefault();
//     }
//   }
  
 

//   ngOnInit() {

//     this.studentRegister = this.formBuilder.group({
//       phonenumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]]
//     });
//   }
//   // convenience getter for easy access to form fields
//   get f() { return this.studentRegister.controls; }

//   // onSubmit() {
//   //   this.submitted = true;
//   //   // stop here if form is invalid
//   //   if (this.studentRegister.invalid) {
//   //     return;
//   //   }
//   //   else {
//   //     let phonenumber = '91' + this.studentRegister.value.phonenumber;

//   //     this.subscription = this.registrationService.sendOTP('/api/auth/register/vitg/student/sendOtp/', `?phoneNumber=${phonenumber}`).subscribe((data: any) => {
//   //       this.message = data;
//   //       console.log(data.phoneNumber);

//   //       localStorage.setItem('student_send_otp_response', JSON.stringify(data));
//   //       sessionStorage.setItem('student_send_otp_response',JSON.stringify(data))
//   //       this.router.navigate(['/verifyStudent']);

//   //       (error: any) =>
//   //         this.errorMessage = error.error.message;
//   //       console.log(this.errorMessage);
//   //     });
//   //   }
//   // }

// }