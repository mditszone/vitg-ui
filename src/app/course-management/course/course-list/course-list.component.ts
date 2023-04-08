import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';
import { TableDataService } from 'src/app/shared/services/table.data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  tableData: TableData = new TableData();
  loggedInUserRole: string = "";
  constructor(private courseService: CourseService, private tableDataService: TableDataService) { 
      this.tableData.nameOfTable = "Course List";
      this.tableData.buttonRoute = "/addCourse"
      this.tableData.buttonName = "Create Course"
    }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllCourses().subscribe(data => {
      data.forEach(val => {
        const actions = [
          {icon: "visibility", route: '/viewcourse/', routeArgs: val.id}, 
          {icon: "edit", route: '/editcourse/', routeArgs: val.id},
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ];
        const obj = {
          id: val.id,
          name: val.name,
          status: val.status,
          actions: actions
        }
        this.tableData.createtData(obj);
      });
      this.tableDataService.setTableData(this.tableData);
    });

    
  }

  // DELETE COURSE NEED WORK

  // deleteCourse(id: number) {
  //   this.courseService.deleteCourseById(id).subscribe(data => {
  //     this.coursedata = this.coursedata.filter(item => item.id !== id);
  //   });
  // }
}

