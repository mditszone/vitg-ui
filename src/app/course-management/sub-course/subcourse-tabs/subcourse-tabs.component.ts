import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcourse-tabs',
  templateUrl: './subcourse-tabs.component.html',
  styleUrls: ['./subcourse-tabs.component.scss']
})
export class SubcourseTabsComponent implements OnInit {

  subCourseTabs: any[];
  constructor() {
    this.subCourseTabs = [
      {
        label: "AddSubCourse",
        link: "./addSubCourse",
        index: 0
      },
      {
        label: "Overview",
        link: "./overview",
        index: 1
      },
      {
        label: "Curriculum",
        link: "./curriculum",
        index: 2
      },
      {
        label: "DurationDays",
        link: "./durationDays",
        index: 3
      },
      {
        label: "DurationHours",
        link: "./durationHours",
        index: 4
      },
      {
        label: "Fee",
        link: "./fee",
        index: 5
      },
      {
        label: "ExamCertification",
        link: "./examCertification",
        index: 6
      },
      {
        label: "TrainingMode",
        link: "./trainingMode",
        index: 7
      },
      {
        label: "YoutubeUrl",
        link: "./youtubeUrl",
        index: 8
      }
    ];
  }

  ngOnInit(): void {
  }

}

