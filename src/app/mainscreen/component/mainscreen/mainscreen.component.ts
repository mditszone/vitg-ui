import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/shared/model/course';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { Topic } from 'src/app/shared/model/topic';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  openMyMenu() {
    this.trigger.openMenu();
  }
  closeMyMenu() {
    this.trigger.closeMenu();
  }

  menuItems: any = [{
    displayName: "All Courses",
    children: []
  }];

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef, private router: Router) {
    this.courseService.getAllCourses().subscribe((arrayOfCourse: Course[]) => {
      arrayOfCourse.forEach((course, courseIndex) => {
        this.menuItems[0].children[courseIndex] = {
          "displayName": course.name,
          "children": []
        };
        this.courseService.getSubCourseListByCourseId(course.id).subscribe((arrayOfSubCourse: Subcourse[]) => {
          arrayOfSubCourse.forEach((subCourse, subCourseIndex) => {
            this.menuItems[0].children[courseIndex].children[subCourseIndex] = {
              "displayName": subCourse.name,
              "route": 'tabComponent',
              "id": subCourse.id
            };
          });
        });
      });
    });
  }

  ngOnInit(): void {

  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  onClick() {
    console.log("i am working");
    this.router.navigate(['/tabComponent']);
  }

  // onClickMaterial() {
  //   console.log("i am working");
  //   this.router.navigate(['/materialSidebar']);
  // }
}
