import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewExampleComponent } from 'src/app/mainscreen/component/view-example/view-example.component';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-student-material',
  templateUrl: './student-material.component.html',
  styleUrls: ['./student-material.component.scss']
})
export class StudentMaterialComponent implements OnInit {

  
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
  constructor(private courseService: CourseService, public dialog: MatDialog, private router: Router, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params["id"];
      this.courseService.getsubTopicConceptListBySubTopicId(id).subscribe((res: any) => {
        console.log(res);
        this.subTopicConceptDetails = res;
        this.courseService.getFileListsFromS3(res[0].id, 'examples').subscribe((response: any) => {
          this.exampleTabData = response;
        })
        this.courseService.getFileListsFromS3(res[0].id, 'trainer').subscribe((response: any) => {
          this.trainerTabData =response
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
  
      });

    });
    

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
