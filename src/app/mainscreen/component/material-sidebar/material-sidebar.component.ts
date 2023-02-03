import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
@Component({
  selector: 'app-material-sidebar',
  templateUrl: './material-sidebar.component.html',
  styleUrls: ['./material-sidebar.component.scss']
})
export class MaterialSidebarComponent implements OnInit {
  topicListdata: any;
  subTopicListdata: any;
  subTopicConceptDetails: any;

  tabs: Array<any> = [];

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    private courseService: CourseService, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params["studentId"]);
      console.log(params["subCourseId"]);
     let studentId: number = parseInt(params["studentId"]);
     let subCourseId: number = parseInt(params["subCourseId"]);
      this.courseService.getTopicListByStudentId(studentId,subCourseId).subscribe((topicList) => {
        console.log(topicList);
        this.topicListdata = topicList
      });
    });
  }

  onClickTopic(id: any) {
    this.courseService.getSubTopicListByTopicId(id).subscribe((res: any) => {
      this.subTopicListdata = res;
    })
  }

  onClickSubTopic(id:any) {
    this.tabs = [];
    this.courseService.getsubTopicConceptListBySubTopicId(id).subscribe((res: any) => {
      console.log(res);

      this.subTopicConceptDetails = res;

      this.tabs.push({
        tabName: "Concept",
        tabData: this.subTopicConceptDetails[0].concept
      })
      this.tabs.push({
        tabName: "Trainer PPT",
        tabData: this.subTopicConceptDetails[0].trainerPpt
      })
      this.tabs.push({
        tabName: "Examples",
        tabData: this.subTopicConceptDetails[0].examples
      })
      this.tabs.push({
        tabName: "Video",
        tabData: this.subTopicConceptDetails[0].youtubeUrl
      })
      this.tabs.push({
        tabName: "Github Url",
        tabData: this.subTopicConceptDetails[0].githubUrl
      })

      this.tabs.push({
        tabName: "Other Urls",
        tabData: this.subTopicConceptDetails[0].otherUrls
      })

    })
  }
}