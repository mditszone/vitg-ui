import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.scss']
})
export class FacultyProfileComponent {
  facultyData:any;

  constructor() {
  this.facultyData = JSON.parse(sessionStorage.getItem('faculty_data'));
  }
}
