import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/model/student';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  errorMessage: string = "";
  data: any;
  constructor(private userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id'];
    this.userService.getStudentById(id).subscribe((data: Student) => {

      this.data = {
        id: data.id,
        studentName: data.name,
        phoneNumber: data.phoneNumber,
        gener: data.gender,
        email: data.email
      }
    });
  }
}