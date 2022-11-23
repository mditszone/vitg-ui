import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from 'src/app/shared/model/trainer';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.scss']
})
export class EditTrainerComponent implements OnInit {

  trainerDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  trainerdata!: Trainer;
  rolesList: any;
  trainerForm: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, public route: ActivatedRoute,
    public router: Router,) { }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.trainerDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      phoneNumber: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      panCardNumber: ['', [Validators.required]],
    });

    this.patchValue();

  }
  get f() {
    return this.trainerDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.userService.getTrainerById(this.id).subscribe((data: Trainer) => {
      this.trainerdata = data;
    });
    this.trainerDetailsForm.patchValue({
      id: this.trainerdata.id,
      phoneNumber: this.trainerdata.phoneNumber,
      name: this.trainerdata.name,
      aadharNumber: this.trainerdata.aadharNumber,
      panCardNumber: this.trainerdata.panCardNumber
    });
  }

  onSubmitUpdateTrainer() {
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
        aadharNumber: this.trainerForm.aadharNumber,
        panCardNumber: this.trainerForm.panCardNumber

      }
      console.log(obj);

      this.userService.updateTrainerinfo( obj).subscribe(data => {
        this.trainerdata = data;
        this.router.navigate(['/trainer'])
      })
    }
  }

}