import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';
import { DisableRightClickService } from 'src/app/shared/services/disable-right-click.service';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  title: string | null = "Core Java";
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

        this.demourl = subCourse.youtubeUrl;

        // let demo = `
        // // <iframe src=${subCourse.youtubeUrl}?rel=0&autoplay=1 ></iframe>
        // `;

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
          tabName: "Exam & Certification",
          tabData: subCourse.examCertification
        })

        this.tabs.push({
          tabName: "Training Mode",
          tabData: subCourse.trainingMode
        })

        this.tabs.push({
          tabName: "Demo",
          // tabData: this.sanitizer.bypassSecurityTrustHtml(demo)

        })

        this.tabs.push({
          tabName: "Duration",
          tabData: subCourse.durationDays
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
    const dialogRef = this.dialog.open(DemoComponent, {
      data: {
        dataKey: url
      }
    });
  }
}

