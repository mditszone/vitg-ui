import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  coursedata: Course[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllCourses().subscribe(data => {
      this.coursedata = data;
      console.log(this.coursedata)
    });
  }
  deleteCourse(id: number) {
    this.courseService.deleteCourseById(id).subscribe(data => {
      this.coursedata = this.coursedata.filter(item => item.id !== id);
    });
  }
}

