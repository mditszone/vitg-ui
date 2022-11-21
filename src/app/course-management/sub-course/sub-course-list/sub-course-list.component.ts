import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-sub-course-list',
  templateUrl: './sub-course-list.component.html',
  styleUrls: ['./sub-course-list.component.scss']
})
export class SubCourseListComponent implements OnInit {

  subcoursedata: Subcourse[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    //  const loggedInUser = JSON.parse(sessionStorage.getItem('staffLogin') || '{}');
    //  console.log(loggedInUser);
    // this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    this.courseService.getAllSubCourses().subscribe(data => {
      this.subcoursedata = data;
      console.log(this.subcoursedata)
    });
  }
  deleteSubCourse(id: number) {
    this.courseService.deleteSubCourseById(id).subscribe(data => {
      this.subcoursedata = this.subcoursedata.filter(item => item.id !== id);
    }
    );
  }
}