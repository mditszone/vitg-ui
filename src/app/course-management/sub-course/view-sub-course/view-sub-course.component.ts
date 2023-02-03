import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-sub-course',
  templateUrl: './view-sub-course.component.html',
  styleUrls: ['./view-sub-course.component.scss']
})
export class ViewSubCourseComponent implements OnInit {
  tabs: Array<any> = [];
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
    private courseService: CourseService,
    private sanitizer: DomSanitizer) { }
  ngOnInit() {

    this.tabs = [];
    let id = this.route.snapshot.params['id'];
    console.log(id)
    this.courseService.getSubCourseById(id).subscribe((data) => {
      console.log(data);

      let html = `<iframe width="680" height="420" src=${data.youtubeUrl} frameborder="0" allowfullscreen></iframe>`;

      this.tabs.push(
        {
          tabName: "SubCourseName",
          tabData: data.name
        }
      )
      this.tabs.push(
        {
          tabName: "Overview",
          tabData: data.overview
        }
      )
      this.tabs.push({
        tabName: "Curriculum",
        tabData: data.curriculum
      })
      this.tabs.push({
        tabName: "DurationDays",
        tabData: data.durationDays
      })
      this.tabs.push({
        tabName: "DurationHours",
        tabData: data.durationHours
      })
      this.tabs.push({
        tabName: "Fee",
        tabData: data.fee
      })

      this.tabs.push({
        tabName: "Exam & Certification",
        tabData: data.examCertification
      })

      this.tabs.push({
        tabName: "Training Mode",
        tabData: data.trainingMode
      })

      this.tabs.push({
        tabName: "Demo",
        tabData: this.sanitizer.bypassSecurityTrustHtml(html)
      })
    });
  }
}
























// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Subcourse } from 'src/app/shared/model/subcourse';
// import { CourseService } from 'src/app/shared/services/course.service';

// @Component({
//   selector: 'app-view-sub-course',
//   templateUrl: './view-sub-course.component.html',
//   styleUrls: ['./view-sub-course.component.scss']
// })
// export class ViewSubCourseComponent implements OnInit {
//   id!: number;
//   subCoursedata:any
//   errorMessage:any;
//   constructor(private courseService:CourseService,
//     private route:ActivatedRoute) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];
//     this.courseService.getSubCourseById(this.id).subscribe((data: Subcourse)=>{
//       console.log(data);
//       this.subCoursedata=data;
//     }),
//     (error) => {
//       this.errorMessage = error.error.message;
//       console.log(this.errorMessage)
//     };
//   }
// }
