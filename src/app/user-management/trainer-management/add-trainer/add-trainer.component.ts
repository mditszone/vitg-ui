import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Trainer } from 'src/app/shared/model/trainer';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.scss']
})
export class AddTrainerComponent implements OnInit {
  fileName: string;
  trainer: Trainer = new Trainer();
  submitted = false;
  data: any;
  errorMessage: any;
  trainerForm: any;
  subCourseListById: any;


  trainerDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    panCardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]*$")]],
    aadharPic: ['', Validators.required],
    panCardPic: ['', Validators.required],
    profPic: ['', Validators.required]
  });

  constructor(private router: Router,
    private userService: UserService,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.fileName = "";
  }

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

  public onUploadChangeAadharPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.trainer.name = file.name;

    reader.addEventListener("load", () => {
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.trainer.aadharPic = newFileArray;
    }, false);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
  onUploadChangePanCardPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.trainer.name = file.name;

    reader.addEventListener("load", () => {
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.trainer.panCardPic = newFileArray;
    }, false);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
  public onUploadChangeProfPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.trainer.name = file.name;

    reader.addEventListener("load", () => {
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.trainer.profPic = newFileArray;
    }, false);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
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
        panCardNumber: this.data.panCardNumber,
        aadharPic: this.data.aadharPic,
        panCardPic: this.data.panCardPic,
        profPic: this.data.profPic
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

      this.trainer.id = this.trainerForm.id;
      this.trainer.phoneNumber = this.trainerForm.phoneNumber,
        this.trainer.name = this.trainerForm.name;
      this.trainer.gender = this.trainerForm.gender,
        this.trainer.email = this.trainerForm.email,
        this.trainer.aadharNumber = this.trainerForm.aadharNumber,
        this.trainer.panCardNumber = this.trainerForm.panCardNumber

      this.userService.updateTrainerinfo(this.trainer).subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/trainerCourse'], { queryParams: { id: data['id'] }});
        });
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      };
    }
  }

}

