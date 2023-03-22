// src/app/menu/menu.component.ts

import { Component, Input, NgZone, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MenuDataService } from "src/app/shared/services/menu.data.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  batchViewRoute: string;
  isLoggedIn: boolean = sessionStorage.getItem("student_dto") == null ? false : true;


  constructor(private menuDataService: MenuDataService, private router: Router, private zone: NgZone) {}

  getData(node: string) {
    this.data = this.menuDataService.getNode(node);
  }

  isExpandable(node: string): boolean {
    return this.menuDataService.dataMap.has(node);
  }

  onClick() {
    console.log("i am working");
    //this.router.navigate(['/tabComponent'],{skipLocationChange: true});
  }

  moveToTabs(name: string): void {
    console.log(this.menuDataService.subCourses);
    const id: number = this.menuDataService.subCourses.find(item => item.name === name).id;
    const route: string = this.isLoggedIn ? '/material/tabs' : '/tabs'; 
    this.zone.run(() => this.router.navigate([route], { queryParams: { subCourseId: id } }));
  }

  // onClick(studentId: any, subCourseId: any) {
  //   this.courseService.getStudentIdBySubCourseId(studentId, subCourseId).subscribe((data: any) => {
  //     console.log(data);
  //     if (data.studentId) {
  //       this.router.navigate(['/materialSidebar'], { queryParams: { "studentId": studentId, "subCourseId": subCourseId } });
  //     }
  //     if (data.error) {
  //        this.router.navigate(['/materialScreen']);
  //        alert("Student don't have access to this page,Please purchase this course to get access.");
  //     }
  //   })
  // }

}
