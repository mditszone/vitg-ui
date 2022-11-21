import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/model/student';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentdata: Student[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private userService: UserService,public route: ActivatedRoute) { }


  ngOnInit(): void {
  //  const loggedInUser = JSON.parse(sessionStorage.getItem('staffLogin') || '{}');
  //  console.log(loggedInUser);
   // this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    this.userService.getAllStudents().subscribe(data => {
      this.studentdata = data;
      console.log(this.studentdata)
    });
  }

}

