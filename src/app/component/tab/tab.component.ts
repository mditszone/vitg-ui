import { Batch } from './../../shared/model/batch';
import { CourseService } from './../../shared/services/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})


export class TabComponent implements OnInit {
  title: string|null = "Core Java";
  tabs:Array<any> = [];
  selected = new FormControl(0);
  //@Inject(Number) private id:number
  constructor( @Inject(ActivatedRoute) private route : ActivatedRoute, private courseService: CourseService) {
    
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params["subCourseId"]);
      this.tabs = [];
      let subCourseId: number = parseInt(params["subCourseId"]);
      this.courseService.getSubCourseById(subCourseId).subscribe((subCourse) => {
        console.log(subCourse);
        this.title = subCourse.name;
        this.tabs.push(
          {
            tabName: "Overview",
            tabData: subCourse.name
          }
        )
        this.tabs.push({
          tabName: "Curriculam",
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
          tabData: subCourse.youtubeUrl
        })
        
        this.tabs.push({
          tabName: "Duriation",
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
