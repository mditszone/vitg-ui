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

  staffDetailsForm: FormGroup = new FormGroup({});
  id: any;
  submitted = false;
  staffdata!: Staff;
  rolesList: any;
  staffForm: any;

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
    this.staffDetailsForm = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      phoneNumber: [{ value: null, disabled: false }],
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      role: [null, [Validators.required]],
      aadharNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(12), Validators.maxLength(12)]],
      panCardNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
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
  get f() {
    return this.staffDetailsForm.controls;
  }
  patchValue() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService.getStaffById(this.id).subscribe((data: Staff) => {
      this.staffdata = data;
    });
    this.staffDetailsForm.patchValue({
      id: this.staffdata.id,
      phoneNumber: this.staffdata.phoneNumber,
      name: this.staffdata.name,
      role: this.staffdata.role,
      aadharNumber: this.staffdata.aadharNumber,
      panCardNumber: this.staffdata.panCardNumber
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
      let id = this.staffDetailsForm.value.id;

      let obj = {
        id: this.staffForm.id,
        phoneNumber: this.staffForm.phoneNumber,
        name: this.staffForm.name,
        role: this.staffForm.role,
        aadharNumber: this.staffForm.aadharNumber,
        panCardNumber: this.staffForm.panCardNumber

      }
      console.log(obj);

      this.userService.updateStaffinfo(id, obj).subscribe(data => {
        this.staffdata = data;
        this.router.navigate(['/staff'])
      })
    }
  }

}