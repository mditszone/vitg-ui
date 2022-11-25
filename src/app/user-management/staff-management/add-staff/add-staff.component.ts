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
    gender:['', Validators.required],
    role: ['', Validators.required],
    email: ['', Validators.required],
    aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
    panCardNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]]
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
    this.getStaffRoles();

  }

  getStaffRoles() {
    this.userService.getStaffRoles().subscribe((data: any) => {
      this.rolesList = data;
      (error: any) =>
        this.errorMessage = error;
    });
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
        gender:this.data.gender,
        role: this.data.role,
        email: this.data.email,
        aadharNumber: this.data.aadharNumber,
        panCardNumber: this.data.panCardNumber
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
      let id = this.staffDetailsForm.value.id;

      let obj = {
        id: this.staffForm.id,
        phoneNumber: this.staffForm.phoneNumber,
        name: this.staffForm.name,
        gender:this.staffForm.gender,
        role: this.staffForm.role,
        email: this.staffForm.email,
        aadharNumber: this.staffForm.aadharNumber,
        panCardNumber: this.staffForm.panCardNumber
      }
      console.log(obj);
      this.userService.updateStaffinfo(id, obj).subscribe(
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

