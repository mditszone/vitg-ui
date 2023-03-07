import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtopic-concept-tabs',
  templateUrl: './subtopic-concept-tabs.component.html',
  styleUrls: ['./subtopic-concept-tabs.component.scss']
})
export class SubtopicConceptTabsComponent implements OnInit {

  subTopicConceptTabs: any[];
  constructor() {
    this.subTopicConceptTabs = [
      {
        label: "SubTopicConcept",
        link: "./subTopicConceptName",
        index: 0
      },
      {
        label: "Trainer",
        link: "./trainerPpt",
        index: 1
      },
      {
        label: "Examples",
        link: "./examples",
        index: 2
      },
      {
        label: "YoutubeUrl",
        link: "./subtopicConceptYoutubeUrl",
        index: 3
      },
      {
        label: "Github",
        link: "./githubUrl",
        index: 4
      },
      {
        label: "OtherUrls",
        link: "./otherUrls",
        index: 5
      }
    ];
  }

  ngOnInit(): void {
  }

}

