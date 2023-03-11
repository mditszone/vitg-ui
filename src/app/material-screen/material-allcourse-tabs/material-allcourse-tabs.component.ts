import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DialogDemoComponent } from 'src/app/mainscreen/component/dialog-demo/dialog-demo.component';
import { CourseService } from 'src/app/shared/services/course.service';
@Component({
  selector: 'app-material-allcourse-tabs',
  templateUrl: './material-allcourse-tabs.component.html',
  styleUrls: ['./material-allcourse-tabs.component.scss']
})
export class MaterialAllcourseTabsComponent implements OnInit {

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
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {
        dataKey: url
      }
    });
  }
}

