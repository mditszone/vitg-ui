import { Component, Input, OnInit } from '@angular/core';
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
  courses: any = [];
  index: number = 0;
  constructor(private menuDataService: MenuDataService, private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((arrayOfCourse: Course[]) => {
      arrayOfCourse.forEach((course, courseIndex) => {
        this.menuDataService.dataMap.set(course.name, [])
        this.courseService.getSubCourseListByCourseId(course.id).subscribe((arrayOfSubCourse: Subcourse[]) => {
          let arr = []
          arrayOfSubCourse.forEach((subCourse, subCourseIndex) => {
            arr.push(subCourse.name);
            this.menuDataService.subCourses.push(subCourse);
          });
          this.menuDataService.dataMap.set(course.name, arr)
        });
      });
      this.courses = Array.from(this.menuDataService.dataMap.keys());
    });
  }

  batchView() {
    const route = this.main ? '/batch' : '/material/batch';
    this.router.navigate([route]);
  }

  onLoggedout() {
    sessionStorage.removeItem("student_dto");
    this.router.navigate(['/']);
  }
  
}
