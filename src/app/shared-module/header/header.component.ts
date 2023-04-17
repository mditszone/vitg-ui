import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { MenuDataService } from 'src/app/shared/services/menu.data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() main: boolean = false;
  @Input() material: boolean = false;
  isUserLoggedIn: boolean = false;
  courses: any = [];
  index: number = 0;
  studentDTO: any;
  facultyData:any
  constructor(private menuDataService: MenuDataService, private courseService: CourseService, private router: Router) {
    this.studentDTO = JSON.parse(sessionStorage.getItem('student_dto') || '{}')
    this.facultyData = JSON.parse(sessionStorage.getItem('faculty_data') || '{}')
    console.log(this.studentDTO)
  }
  isLoggedIn: boolean = (sessionStorage.getItem("student_dto") || sessionStorage.getItem("faculty_data")) == null ? false : true;
  logoRoute: string;

  ngOnInit(): void {
    this.logoRoute = this.isLoggedIn ? '/material/batch' : '';
    this.courseService.getAllCourses().subscribe((arrayOfCourse: Course[]) => {
      arrayOfCourse.forEach((course, courseIndex) => {
        this.menuDataService.dataMap.set(course.name, [])
        this.courseService.getSubCourseListByCourseId(course.id).subscribe((arrayOfSubCourse: Subcourse[]) => {
          let arr = []
          arrayOfSubCourse.forEach((subCourse, subCourseIndex) => {
            arr.push(subCourse.name);
            this.menuDataService.subCourses.push(subCourse);
          });
          this.menuDataService.dataMap.set(course.name, arr);
        });
      });
      this.courses = Array.from(this.menuDataService.dataMap.keys());
    });
  }

  batchView() {
    const route = this.main ? '/batch' : '/material/batch';
    this.router.navigate([route]);
  }

  onProfile() {
    if(this.studentDTO){
      this.router.navigate(['material/profile'])
    }
    if(this.facultyData){
      this.router.navigate(['material/facultyProfile'])
    }
    
  }
  onLoggedout() {
    sessionStorage.removeItem("student_dto");
    this.router.navigate(['/']);
  }



}
