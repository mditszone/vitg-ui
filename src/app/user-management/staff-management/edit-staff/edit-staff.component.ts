import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/shared/model/staff';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  fileName: string;
  staff: Staff = new Staff();
  staffDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  staffdata!: Staff;
  rolesList: any;
  staffForm: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    public route: ActivatedRoute,
    public router: Router,) { this.fileName = ""; }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.staffDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      phoneNumber: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      role: [null, [Validators.required]],
      email: ['', Validators.required],
      aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      panCardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]*$")]],
      // aadharPic: ['', Validators.required],
      // panCardPic: ['', Validators.required],
      // profPic: ['', Validators.required]
    });

    this.getStaffRoles();
    this.patchValue();

  }
  getStaffRoles() {
    this.userService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      console.log(this.rolesList);
    });
  }
  // public onUploadChangeAadharPic(evt: any): void {
  //   const reader = new FileReader();
  //   const file = evt.target.files[0];
  //   this.fileName = file.name;
  //   this.staff.name = file.name;

  //   reader.addEventListener("load", () => {
  //     //this.slider.image = reader.result;
  //     const arr = new Uint8Array(<ArrayBuffer>reader.result);
  //     var newFileArray: Array<number> = [];
  //     if (arr.length > 0) {
  //       for (let i: number = 0; i < arr.length; i++) {
  //         newFileArray.push(arr[i]);
  //       }
  //     }
  //     this.staff.aadharPic = newFileArray;
  //   }, false);

  //   if (file) {
  //     //reader.readAsDataURL(file);
  //     reader.readAsArrayBuffer(file);
  //   }
  // }
  // onUploadChangePanCardPic(evt: any): void {
  //   const reader = new FileReader();
  //   const file = evt.target.files[0];
  //   this.fileName = file.name;
  //   this.staff.name = file.name;

  //   reader.addEventListener("load", () => {
  //     //this.slider.image = reader.result;
  //     const arr = new Uint8Array(<ArrayBuffer>reader.result);
  //     var newFileArray: Array<number> = [];
  //     if (arr.length > 0) {
  //       for (let i: number = 0; i < arr.length; i++) {
  //         newFileArray.push(arr[i]);
  //       }
  //     }
  //     this.staff.panCardPic = newFileArray;
  //   }, false);

  //   if (file) {
  //     //reader.readAsDataURL(file);
  //     reader.readAsArrayBuffer(file);
  //   }
  // }
  // public onUploadChangeProfPic(evt: any): void {
  //   const reader = new FileReader();
  //   const file = evt.target.files[0];
  //   this.fileName = file.name;
  //   this.staff.name = file.name;

  //   reader.addEventListener("load", () => {
  //     //this.slider.image = reader.result;
  //     const arr = new Uint8Array(<ArrayBuffer>reader.result);
  //     var newFileArray: Array<number> = [];
  //     if (arr.length > 0) {
  //       for (let i: number = 0; i < arr.length; i++) {
  //         newFileArray.push(arr[i]);
  //       }
  //     }
  //     this.staff.profPic = newFileArray;
  //   }, false);

  //   if (file) {
  //     //reader.readAsDataURL(file);
  //     reader.readAsArrayBuffer(file);
  //   }
  // }

  get f() {
    return this.staffDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getStaffById(this.id).subscribe((data: Staff) => {
      this.staffdata = data;
      console.log(this.staffdata)
    });
    this.staffDetailsForm.patchValue({
      id: this.staffdata.id,
      phoneNumber: this.staffdata.phoneNumber,
      name: this.staffdata.name,
      role: this.staffdata.role,
      email:this.staffdata.email,
      aadharNumber: this.staffdata.aadharNumber,
      panCardNumber: this.staffdata.panCardNumber,
      // aadharPic: this.staffdata.aadharPic,
      // panCardPic: this.staffdata.panCardPic,
      // profPic: this.staffdata.profPic
    });
  }

  onSubmitUpdateStaff() {
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
      this.staff.role = this.staffForm.role;
      this.staff.email = this.staffForm.email;
      this.staff.aadharNumber = this.staffForm.aadharNumber;
      this.staff.panCardNumber = this.staffForm.panCardNumber;

      this.userService.updateStaffinfo(this.staff).subscribe(data => {
        this.router.navigate(['/staff'])
      })
    }
  }

}