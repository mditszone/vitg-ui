import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { CourseService } from 'src/app/shared/services/course.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-all-courses-menu',
  templateUrl: './all-courses-menu.component.html',
  styleUrls: ['./all-courses-menu.component.scss']
})
export class AllCoursesMenuComponent implements OnInit {

  @Input() items!: MenuItem[];
  @ViewChild('childMenu') public childMenu: any;

  constructor(
    public menuService: MenuService,
    public courseService: CourseService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    
  }

  onClick(id: any): void { 
    this.zone.run(() => this.router.navigate(['/materialAllcoursestabs'], { queryParams: { subCourseId: id } }));
  }

}
