import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/model/staff';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  fileName: string;
  staff: Staff = new Staff();
  submitted = false;
  staffDTO!: Staff;
  data: any;
  errorMessage: any;
  staffForm: any;
  rolesList: any;

  staffDetailsForm = this.formBuilder.group({
    id: [{ value: '', disabled: false }],
    phoneNumber: [{ value: '', disabled: false }],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    role: ['', Validators.required],
    email: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    panCardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]*$")]],
    aadharPic: ['', Validators.required],
    panCardPic: ['', Validators.required],
    profPic: ['', Validators.required],

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
    this.getStaffRoles();
  }

  getStaffRoles() {
    this.userService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }

  public onUploadChangeAadharPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.staff.name = file.name;

    reader.addEventListener("load", () => {
      //this.slider.image = reader.result;
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.staff.aadharPic = newFileArray;
    }, false);

    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
  }
  onUploadChangePanCardPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.staff.name = file.name;

    reader.addEventListener("load", () => {
      //this.slider.image = reader.result;
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.staff.panCardPic = newFileArray;
    }, false);

    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
  }
  public onUploadChangeProfPic(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    this.staff.name = file.name;

    reader.addEventListener("load", () => {
      //this.slider.image = reader.result;
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.staff.profPic = newFileArray;
    }, false);

    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.staffDetailsForm.controls; }

  patchValue() {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(atob(params['data']));
      console.log(this.data);

      this.staffDetailsForm.patchValue({
        id: this.data.id,
        phoneNumber: this.data.phoneNumber,
        name: this.data.name,
        gender: this.data.gender,
        role: this.data.role,
        email: this.data.email,
        aadharNumber: this.data.aadharNumber,
        panCardNumber: this.data.panCardNumber,
        aadharPic: this.data.aadharPic,
        panCardPic: this.data.panCardPic,
        profPic: this.data.profPic
      });
    });
  }

  updateStaffInfo() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.staffDetailsForm.invalid) {
      return;
    }
    else {
      this.staffForm = this.staffDetailsForm.value;

      this.staff.id = this.staffForm.id;
      this.staff.phoneNumber = this.staffForm.phoneNumber;
      this.staff.name = this.staffForm.name;
      this.staff.gender = this.staffForm.gender;
      this.staff.role = this.staffForm.role;
      this.staff.email = this.staffForm.email;
      this.staff.aadharNumber = this.staffForm.aadharNumber;
      this.staff.panCardNumber = this.staffForm.panCardNumber;

      this.userService.updateStaffinfo(this.staff).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/staff']);
        });
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      };
    }
  }
}

