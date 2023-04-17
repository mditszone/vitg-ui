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
  studentRole: any;
  facultyRole: any;
  s3FileData: any = []

  constructor(private courseService: CourseService,
    public dialog: MatDialog,
    private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute
  ) {
    this.studentRole = JSON.parse(sessionStorage.getItem('student_dto'))
    this.facultyRole = JSON.parse(sessionStorage.getItem('faculty_data'))

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params["id"];
      this.courseService.getsubTopicConceptListBySubTopicId(id).subscribe((res: any) => {
        console.log(res);
        this.subTopicConceptDetails = res;
        this.courseService.getFileListsFromS3(res[0].id, 'examples').subscribe((response: any) => {
          this.exampleTabData = response;
          //console.log(this.exampleTabData)
          // for (let files of response) {
          //   let file = files.fileName;
          //   let splitResult = file.split('/')
          //   let finalResult = splitResult[splitResult.length - 1]
          //   //let s3 = new s3Data(finalResult,file);
          //   this.s3FileData.push([finalResult, file])
          // }
          // console.log(this.s3FileData)
        })
        this.courseService.getFileListsFromS3(res[0].id, 'trainer').subscribe((response: any) => {
          this.trainerTabData = response
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

        if (this.facultyRole) {
          this.tabs.push({
            tabName: "Trainer Docs",
            //tabData: this.trainerTabData
          })
          this.tabs.push({
            tabName: "Github Url",
            tabData: this.subTopicConceptDetails[0].githubUrl
          })
          this.tabs.push({
            tabName: "Other Urls",
            tabData: this.subTopicConceptDetails[0].otherUrls
          })
        }
        if (this.studentRole) {
          this.tabs.push({
            tabName: "Concept",
            tabData: this.subTopicConceptDetails[0].concept
          })
          this.tabs.push({
            tabName: "Examples",
            //tabData: this.exampleTabData
          })
          this.tabs.push({
            tabName: "Video",
            tabData: this.subTopicConceptDetails[0].youtubeUrl
          })
        }
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
  transform(file: string): string {
    let arr = file.split('/')
    return arr[arr.length - 1];
  }

}
