import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent {

  studentDTO: any
  facultyData:any;

  constructor() {
    this.studentDTO = JSON.parse(sessionStorage.getItem('student_dto') || '{}')
    // if(this.studentDTO) {

    // }
    // else{
    //   console.log(this.facultyData)
    // }
  }
}
