import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  tableData: TableData = new TableData();
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService) { 
      this.tableData.headers = ["ID", "COURSE NAME", "STATUS", "ACTIONS"];
      this.tableData.nameOfTable = "Course List";
      this.tableData.buttonRoute = "/addCourse"
      this.tableData.buttonName = "Create Course"
    }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllCourses().subscribe(data => {
      data.forEach(val => {
        let arr = [];
        arr.push(val.id);
        arr.push(val.name);
        arr.push(val.status);
        arr.push([
          {icon: "visibility", route: '/viewcourse/', routeArgs: val.id}, 
          {icon: "edit", route: '/editcourse/', routeArgs: val.id},
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ]);
        this.tableData.rowData.push(arr);
      });
    });
  }

  // DELETE COURSE NEED WORK

  // deleteCourse(id: number) {
  //   this.courseService.deleteCourseById(id).subscribe(data => {
  //     this.coursedata = this.coursedata.filter(item => item.id !== id);
  //   });
  // }
}

