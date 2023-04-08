// src/app/menu/menu.component.ts

import { Component, EventEmitter, Input, NgZone, Output, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { Router } from "@angular/router";
import { CourseService } from "src/app/shared/services/course.service";
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
  @Input() printValue: Function;
  @Input() type: string;
  @Input() val: string;
  @Output() onSuggest: EventEmitter<any> = new EventEmitter();

  curNode: string = "";
  isLoggedIn: boolean = sessionStorage.getItem("student_dto") == null ? false : true;
  constructor(private menuDataService: MenuDataService, private router: Router, private courseService: CourseService, private zone: NgZone,) {
  }

  ngOnInit() {
    this.val = this.type;
  }


  getData(node: string) {
    this.data = this.menuDataService.getNode(node);
  }

  isExpandable(node: string): boolean {
    return this.menuDataService.dataMap.has(node);
  }

  onClick(node: string, type: string) {
    const subCourseId: number = this.menuDataService.subCourses.find(item => item.name === node).id;
    if (this.val === "courseButton") {
      this.moveToTabs(subCourseId);
    } else {
      this.checkAccess(subCourseId);
    }

  }

  moveToTabs(subCourseId: number) {
    console.log("test");
    this.menuDataService.curNode.subscribe(data => {
      const route: string = this.isLoggedIn ? '/material/tabs' : '/tabs'; 
      this.zone.run(() => this.router.navigate([route], { queryParams: { subCourseId: subCourseId } }));
    });
    
  }

  checkAccess(subCourseId: number) {
    const loggedInUser = JSON.parse(sessionStorage.getItem('student_dto') || '{}');
    const studentId = loggedInUser.id;
    this.courseService.getTopicListByStudentId2(studentId, subCourseId).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.menuDataService.setShowSideBar(true);
        this.menuDataService.setTopicData(data);
      }
      if (data.length === 0) {
        console.log("working")
        this.menuDataService.setShowSideBar(false);
        alert("Student don't have access to this page,Please purchase this course to get access.");
      }
    })
  }

}
