import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  title: string | null = "Core Java";
  tabs: Array<any> = [];
  selected = new FormControl(0);
  //@Inject(Number) private id:number;
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
    private courseService: CourseService,
    private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params["subCourseId"]);
      this.tabs = [];
      let subCourseId: number = parseInt(params["subCourseId"]);
      this.courseService.getSubCourseById(subCourseId).subscribe((subCourse) => {
        console.log(subCourse);
        let html = `<iframe width="420" height="315" src=${subCourse.youtubeUrl} frameborder="0" allowfullscreen></iframe>`;
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
          tabData: this.sanitizer.bypassSecurityTrustHtml(html)
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

}

