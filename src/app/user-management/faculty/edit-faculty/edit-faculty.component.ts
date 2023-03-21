import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from 'src/app/shared/model/faculty';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.scss']
})
export class EditFacultyComponent implements OnInit {

  id: number;
  facultyDTO: any;
  faculty: Faculty = new Faculty();
  facultyDetails: FormGroup = new FormGroup({});
  submitted: boolean;
  facultyForm: any

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id']
    this.userService.getFacultyById(this.id).subscribe(response => {
      this.facultyDTO = response
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.facultyDetails = this.formBuilder.group({
      id: [{ value: null, disabled: false }],
      userName: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      pin: [{ value: null, disabled: false }],
    });
  }

  get f() {
    return this.facultyDetails.controls;
  }
  patchValue() {
    this.facultyDetails.patchValue({
      id: this.facultyDTO.id,
      userName: this.facultyDTO.userName,
      pin: this.facultyDTO.pin,
    });
  }

  onSubmitUpdateStaff() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.facultyDetails.invalid) {
      return;
    }
    else {
      this.facultyForm = this.facultyDetails.value;

      this.faculty.id = this.facultyForm.id;
      this.faculty.userName = this.facultyForm.userName;
      this.faculty.pin = this.facultyForm.pin;

      this.userService.updateFacultyinfo(this.faculty).subscribe(response => {
        this.router.navigate(['/facultyTab/facultyAccess'], { queryParams: { id: response['id'] }})
      })
    }
  }
}