import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { ViewExampleComponent } from '../view-example/view-example.component';
@Component({
  selector: 'app-material-sidebar',
  templateUrl: './material-sidebar.component.html',
  styleUrls: ['./material-sidebar.component.scss']
})
export class MaterialSidebarComponent implements OnInit {

  s3BucketFiles: any;
  sTCD: any
  topicListdata: any;
  subTopicListdata: any;
  subTopicConceptDetails: any;
  demourl: string | null = '';
  tabs: Array<any> = [];
  exampleTabData: any;
  trainerTabData: any;
  fileURL: string | null = '';
  fileName: string | null = '';

  @ViewChild("outsideElement", { static: true }) outsideElement: ElementRef;
  @ViewChild('modalView', { static: true }) modalView$: ElementRef;

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    private courseService: CourseService,
    public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params["studentId"]);
      console.log(params["subCourseId"]);
      let studentId: number = parseInt(params["studentId"]);
      let subCourseId: number = parseInt(params["subCourseId"]);
      this.courseService.getTopicListByStudentId(studentId, subCourseId).subscribe((topicList) => {
        this.topicListdata = topicList
      });
    });
  }

  onClickTopic(id: any) {
    this.courseService.getSubTopicListByTopicId(id).subscribe((res: any) => {
      this.subTopicListdata = res;
    })
  }

  onClickSubTopic(id: any) {

    this.courseService.getsubTopicConceptListBySubTopicId(id).subscribe((res: any) => {
      console.log(res);

      this.subTopicConceptDetails = res;
      this.courseService.getFileListsFromS3(res[0].id, 'examples').subscribe((response: any) => {
        this.exampleTabData = response
        // let superArray = [];
        // this.exampleTabData = superArray
        // console.log(this.exampleTabData)
        // for (let files of response) {
        //   let subArray = [];
        //   let file = files.fileName;
        //   let splitResult = file.split('/')
        //   let finalResult = splitResult[splitResult.length - 1]
        //   subArray.push(finalResult)
        //   superArray.push(subArray)
        // }
        // console.log(superArray)
      })
      this.courseService.getFileListsFromS3(res[0].id, 'trainer').subscribe((response: any) => {
        this.trainerTabData =response
        // let superArray = [];
        // this.trainerTabData = superArray
        // console.log(this.trainerTabData)
        // for (let files of response) {
        //   let subArray = [];
        //   let file = files.fileName;
        //   let splitResult = file.split('/')
        //   let finalResult = splitResult[splitResult.length - 1]
        //   subArray.push(finalResult)
        //   superArray.push(subArray)
        // }
        // console.log(superArray)
      })


      this.tabs = [];

      this.tabs.push({
        tabName: "Concept",
        tabData: this.subTopicConceptDetails[0].concept
      })
      this.tabs.push({
        tabName: "Trainer Docs",
        //tabData: this.trainerTabData
      })
      this.tabs.push({
        tabName: "Examples",
        //tabData: this.exampleTabData
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

  viewFile(filePath: any) {
    this.dialog.open(ViewExampleComponent, {
      width: '900px',
      height: '800px',
      data: {
        dataKey: filePath
      }
    })
  }

  deleteFile(fileName: any) {
    this.courseService.deleteFileFromS3(fileName).subscribe((response: any) => {
      console.log(response)
    })
  }
}