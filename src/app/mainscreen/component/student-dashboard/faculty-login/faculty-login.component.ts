import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/shared/model/faculty';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.scss']
})
export class FacultyLoginComponent {
  faculty: Faculty = new Faculty();
  facultyLogin: FormGroup = new FormGroup({});
  input: string

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
    ) {}
  ngOnInit() {
    this.facultyLogin = this.formBuilder.group({
      userName: ['', [Validators.required]]
    })
  }
  get f() { return this.facultyLogin.controls; }

  onSubmitFaculty() {
    this.input = this.faculty.userName
    this.userService.getAllFaculty().subscribe(response => {
      for (let array of response) {
        let id = array.id
        let name = array.userName
        if (this.input === name) {
          let obj = {
            id: id,
            userName: this.input
          }
          this.userService.facultyLogin(obj).subscribe(response => {
            this.router.navigate(['verifyFaculty'])
            sessionStorage.setItem('faculty_pin', JSON.stringify(response))
          })
        }
      }
    })
  }
}
