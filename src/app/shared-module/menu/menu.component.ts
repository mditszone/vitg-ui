// import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { Course } from 'src/app/shared/model/course';
// import { MenuItem } from 'src/app/shared/model/menu-item';
// import { Subcourse } from 'src/app/shared/model/subcourse';
// import { CourseService } from 'src/app/shared/services/course.service';
// import { MenuService } from 'src/app/shared/services/menu.service';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.scss']
// })
// export class MenuComponent {
//   @Input() items!: MenuItem[];
//   @ViewChild('childMenu') public childMenu: any;

//   @Input() data: string[] = [];
//   @Input() trigger = "Menu";
//   @Input() isRootNode = false;

//   index: number = 0;
//   allCourses: any = [];
  
//   constructor(private courseService: CourseService,  private router: Router, private zone: NgZone) {
//    }

//   onClick(id: any): void {
//     this.zone.run(() => this.router.navigate(['/tabComponent'], { queryParams: { subCourseId: id }, skipLocationChange: true }));
//   }

// }
