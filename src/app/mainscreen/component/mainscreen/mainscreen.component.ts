import { ChatService } from './../../../chat-bot/chat.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/model/course';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {
  menuItems: any = [{
    displayName: "All Courses",
    children: []
  }];

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) { 
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
              "route": subCourse.name,
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
}
