import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Tab {
  label: string;
  active: boolean;
  link: string;
  index: any;
};

@Component({
  selector: 'app-subcourse-tabs',
  templateUrl: './subcourse-tabs.component.html',
  styleUrls: ['./subcourse-tabs.component.scss']
})
export class SubcourseTabsComponent implements OnInit {

  
  
  subCourseTabs: Tab[];
  constructor() {
    this.subCourseTabs = [
      {
        label: "SubCourse",
        active: true,
        link: "./subCourseName",
        index: 0
      },
      {
        label: "Overview",
        active: false,
        link: "./overview",
        index: 1
      },
      {
        label: "Curriculum",
        active: false,
        link: "./curriculum",
        index: 2
      },
      {
        label: "DurationDays",
        active: false,
        link: "./durationDays",
        index: 3
      },
      {
        label: "DurationHours",
        active: false,
        link: "./durationHours",
        index: 4
      },
      {
        label: "Fee",
        active: false,
        link: "./fee",
        index: 5
      },
      {
        label: "ExamCertification",
        active: false,
        link: "./examCertification",
        index: 6
      },
      {
        label: "TrainingMode",
        active: false,
        link: "./trainingMode",
        index: 7
      },
      {
        label: "YoutubeUrl",
        active: false,
        link: "./youtubeUrl",
        index: 8
      }
    ];
  }

  ngOnInit(): void {
  }

  changeTab(event: any) {
    this.subCourseTabs = this.subCourseTabs.map((tab, i) => i === event ? { ...tab, active: true } : { ...tab, active: false });
  }
}

