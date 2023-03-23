import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/shared/model/faculty';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.scss']
})
export class AddFacultyComponent {
  faculty: Faculty = new Faculty();

  facultyDetailsForm = this.formBuilder.group({
    userName: [{ value: '', disabled: false }]
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) {
  }

  addFaculty() {
    console.log(this.faculty)
    this.userService.addFaculty(this.faculty).subscribe(response => {
      this.router.navigate(['/faculty']);
    })
  }
}