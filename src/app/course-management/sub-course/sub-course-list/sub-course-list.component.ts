import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-sub-course-list',
  templateUrl: './sub-course-list.component.html',
  styleUrls: ['./sub-course-list.component.scss']
})
export class SubCourseListComponent implements OnInit {
  tableData: TableData = new TableData();
  subcoursedata: Subcourse[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService,
    public route: ActivatedRoute) {
      this.tableData.headers = ["ID", "SUBCOURSE NAME", "COURSE NAME", "DUR. DAYS", "DUR. HOURS", "ACTIONS"];
      this.tableData.nameOfTable = "Sub Course List";
      this.tableData.buttonRoute = "/addBatch"
      this.tableData.buttonName = "Create Course"
     }


  ngOnInit(): void {
     const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllSubCourses().subscribe(data => {
      this.subcoursedata = data;
      data.forEach(val => {
        const actions = [
          {icon: "visibility", route: '/viewsubcourse/', routeArgs: val.id}, 
          {icon: "edit", route: '/subCourseTab/editsubcourse/', routeArgs: val.id},
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ]
        const obj = {
          id: val.id,
          name: val.name,
          courseName:val.course.name,
          durationDays:val.durationDays,
          durationHours:val.durationHours,
          actions: actions
        }
        this.tableData.createtData(obj);
        // let arr = [];
        // arr.push(val.id);
        // arr.push(val.name);
        // arr.push(val.courseName);
        // arr.push(val.durationDays);
        // arr.push(val.durationHours);
        // arr.push([
        //   {icon: "visibility", route: '/viewsubcourse/', routeArgs: val.id}, 
        //   {icon: "edit", route: '/subCourseTab/editsubcourse/', routeArgs: val.id},
        //   {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        // ]);
        // this.tableData.rowData.push(arr);
      });
    });
  }
  deleteSubCourse(id: number) {
    this.courseService.deleteSubCourseById(id).subscribe(data => {
      this.subcoursedata = this.subcoursedata.filter(item => item.id !== id);
    });
  }
}