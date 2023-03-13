import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';
@Component({
  selector: 'app-allcourses-tabs',
  templateUrl: './allcourses-tabs.component.html',
  styleUrls: ['./allcourses-tabs.component.scss']
})
export class AllcoursesTabsComponent implements OnInit {

  title: string | null = "No information";
  tabs: Array<any> = [];
  selected = new FormControl(0);
  demourl: string | null = '';
  //@Inject(Number) private id:number;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
    public dialog: MatDialog,
    private courseService: CourseService,
    private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params["subCourseId"]);
      this.tabs = [];
      let subCourseId: number = parseInt(params["subCourseId"]);

      this.courseService.getSubCourseById(subCourseId).subscribe((subCourse) => {
        console.log(subCourse);
        this.demourl = subCourse.youtubeUrl;
        console.log(this.demourl);

        this.title = subCourse.name;

        this.tabs.push(
          {
            tabName: "Overview",
            tabData: subCourse.overview
          }
        )
        this.tabs.push({
          tabName: "Curriculum",
          tabData: subCourse.curriculum
        })

        this.tabs.push({
          tabName: "Demo",
          // tabData: this.sanitizer.bypassSecurityTrustHtml(demo)
        })

        this.tabs.push({
          tabName: "Fee",
          tabData: subCourse.fee
        })
      });
    });
  }
  openDialog() {
    console.log(this.demourl);
    let url = this.demourl;
    this.dialog.open(DialogDemoComponent, {
      data: {
        dataKey: url
      }
    });
  }
}

