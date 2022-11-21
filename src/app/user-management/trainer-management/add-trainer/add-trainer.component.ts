import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent implements OnInit {
  submitted = false;
  data: any;
  errorMessage: any;
  trainerForm: any;
  rolesList: any;

  trainerDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    gender:['', Validators.required],
    email: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    panCardNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]]
  });

  constructor(private router: Router, private userService: UserService,public route: ActivatedRoute, private formBuilder: FormBuilder) { }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    this.patchValue();
  }

 

  // convenience getter for easy access to form fields
  get f() { return this.trainerDetailsForm.controls; }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);

      this.trainerDetailsForm.patchValue({
        id: this.data.id,
        phoneNumber: this.data.phoneNumber,
        name: this.data.name,
        gender: this.data.gender,
        email: this.data.email,
        aadharNumber: this.data.aadharNumber,
        panCardNumber: this.data.panCardNumber
      });
    });
  }

  updateTrainerInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.trainerDetailsForm.invalid) {
      return;
    }
    else {
      this.trainerForm = this.trainerDetailsForm.value;
      let id = this.trainerDetailsForm.value.id;

      let obj = {
        id: this.trainerForm.id,
        phoneNumber: this.trainerForm.phoneNumber,
        name: this.trainerForm.name,
        gender: this.trainerForm.gender,
        email: this.trainerForm.email,
        aadharNumber: this.trainerForm.aadharNumber,
        panCardNumber: this.trainerForm.panCardNumber
      }
      console.log(obj);

      this.userService.updateTrainerinfo(id, obj).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/trainer']);
        });
    }
  }
}

