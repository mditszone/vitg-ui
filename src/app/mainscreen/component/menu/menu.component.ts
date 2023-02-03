import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { CourseService } from 'src/app/shared/services/course.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() items!: MenuItem[];
  @ViewChild('childMenu') public childMenu: any;

  constructor(
    public menuService: MenuService,
    public courseService: CourseService,
    private router: Router,
    private zone: NgZone
  ) { }

  // getData() {
  //   this.menuService.getData().subscribe((data: any) => {
  //     console.log(data)
  //   })
  // }

  onClick(id: any): void { 
    this.zone.run(() => this.router.navigate(['/tabComponent'], { queryParams: { subCourseId: id } }));
  }

}
