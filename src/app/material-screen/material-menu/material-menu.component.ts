import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/model/menu-item';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-material-menu',
  templateUrl: './material-menu.component.html',
  styleUrls: ['./material-menu.component.scss']
})
export class MaterialMenuComponent implements OnInit {

  @Input() items: MenuItem[] | undefined;
  @ViewChild('childMenu') public childMenu: any;

  loggedInUserId: string = "";

  constructor(private router: Router,
    private courseService: CourseService) { }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('student_dto') || '{}');
    this.loggedInUserId = loggedInUser.id;
  }

  onClick(studentId: any, subCourseId: any) {
    this.courseService.getStudentIdBySubCourseId(studentId, subCourseId).subscribe((data: any) => {
      console.log(data);
      if (data.studentId) {
        this.router.navigate(['/materialSidebar'], { queryParams: { "studentId": studentId, "subCourseId": subCourseId } });
      }
      if (data.error) {
         this.router.navigate(['/materialScreen']);
         alert("Student don't have access to this page,Please purchase this course to get access.");
      }
    })
  }
}