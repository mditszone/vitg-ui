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

  @ViewChild("outsideElement", {static: true}) outsideElement : ElementRef;
  @ViewChild('modalView', {static: true}) modalView$ : ElementRef;

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
        console.log(this.exampleTabData);
      })
      this.courseService.getFileListsFromS3(res[0].id, 'trainer').subscribe((response: any) => {
        this.trainerTabData = response
        console.log(this.trainerTabData);
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
 /* viewFile(fileName: any) {
    this.courseService.getFileFromS3(fileName).subscribe((response: any) => {
       let file = new Blob([response], { type: 'application/pdf' });
       var fileURL = URL.createObjectURL(file);
      // window.open(fileURL);

      //let url = this.demourl;
      const dialogRef = this.dialog.open(ViewExampleComponent, {
        data: {
          dataKey: fileURL
        }
      });
    })
  }*/
  viewFile(filePath: any) {
      const dialogRef = this.dialog.open(ViewExampleComponent, {
        width: '900px',
        height: '800px',
        data: {
          dataKey: filePath
        }
      })
  }
  openModel(fileName: any){
    this.courseService.getFileFromS3(fileName).subscribe((response: any) => {
      let file = new Blob([response], { type: 'application/pdf' });
      this.fileURL = URL.createObjectURL(file);
      this.modalView$.nativeElement.classList.add('visible');
    
  })
  }

  closeModal() {
    this.modalView$.nativeElement.classList.remove('visible');
  }

  deleteFile(fileName: any) {
    this.courseService.deleteFileFromS3(fileName).subscribe((response: any) => {
      console.log(response)
    })
  }
}
// deleteStaff(id: number) {
//   this.userService.deleteStaffById(id).subscribe((res: any) => {
//     this.staffdata = this.staffdata.filter(item => item.id != id);
//   })
// }