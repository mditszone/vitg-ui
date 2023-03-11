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
  trainer: Trainer = new Trainer();
  trainerDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  trainerdata!: Trainer;
  trainerForm: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    public route: ActivatedRoute,
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
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', Validators.required],
      aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      panCardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]*$")]],
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
      email:this.trainerdata.email,
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

      this.trainer.id = this.trainerForm.id,
        this.trainer.phoneNumber = this.trainerForm.phoneNumber,
        this.trainer.name = this.trainerForm.name,
        this.trainer.email = this.trainerForm.email;
        this.trainer.aadharNumber = this.trainerForm.aadharNumber,
        this.trainer.panCardNumber = this.trainerForm.panCardNumber
    }

    this.userService.updateTrainerinfo(this.trainer).subscribe(data => {
      this.trainerdata = data;
      this.router.navigate(['/trainer'],{skipLocationChange: true})
    })
  }
}