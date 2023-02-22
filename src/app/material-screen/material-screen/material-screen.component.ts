import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { BatchService } from 'src/app/shared/services/batch.service';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-material-screen',
  templateUrl: './material-screen.component.html',
  styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  loggedInUserRole: string = "";
  batchMenu: BatchMenu[];
  ngOnInit(): void {
  }
  onLoggedout() {
    this.router.navigate(['/']);
  }
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
  materialMenuItems: any = [{
    displayName: "Material",
    children: []
  }];

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef, private router: Router, private batchService: BatchService) {
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
    this.courseService.getAllCourses().subscribe((arrayOfCourse: Course[]) => {
      arrayOfCourse.forEach((course, courseIndex) => {
        this.materialMenuItems[0].children[courseIndex] = {
          "displayName": course.name,
          "children": []
        };
        this.courseService.getSubCourseListByCourseId(course.id).subscribe((arrayOfSubCourse: Subcourse[]) => {
          arrayOfSubCourse.forEach((subCourse, subCourseIndex) => {
            this.materialMenuItems[0].children[courseIndex].children[subCourseIndex] = {
              "displayName": subCourse.name,
              "id": subCourse.id
            };
          });
        });
      });
    });
    this.batchService.getAllBatches().subscribe(data => {
      this.batchMenu = data.map(item => { return {"name": item.name, "id": item.id}; });
      console.log("batchMenu", this.batchMenu);
    });
  }


  batchView() {
    this.router.navigate(['/materialbatchList']);
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }

  onClick() {
    console.log("i am working");
    this.router.navigate(['/tabComponent']);
  }

  onClickMaterial() {
    console.log("i am working");
    this.router.navigate(['/materialSidebar']);
  }
}


interface BatchMenu {
  id: number;
  name: string;
}