import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewExampleComponent } from 'src/app/mainscreen/component/view-example/view-example.component';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { AddTrainerDocsComponent } from '../add-trainer-docs/add-trainer-docs.component';
@Component({
  selector: 'app-trainer-ppt',
  templateUrl: './trainer-ppt.component.html',
  styleUrls: ['./trainer-ppt.component.scss']
})
export class TrainerPptComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptdata!: SubTopicConcept;
  subTopicConceptId: any
  trainerTabData:any

  constructor(
    private courseService: CourseService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    var response = JSON.parse(sessionStorage.getItem('tabServiceData') || '{}')
    {
      if (response.id) {
        this.subTopicConceptId = response.id;
        console.log(this.subTopicConceptId)
      }
      else {
        this.subTopicConceptId = response;
        console.log(this.subTopicConceptId)
      }
      this.courseService.getSubTopicConceptById(this.subTopicConceptId).subscribe((subTopicConcept) => {
        console.log(subTopicConcept);
        this.subTopicConceptdata = subTopicConcept;
        console.log(this.subTopicConceptdata)

        this.courseService.getFileListsFromS3(response, 'trainer').subscribe((response: any) => {
          this.trainerTabData = response
          console.log(this.trainerTabData);
        })
      })
    }
  }
  addFiles(){
    this.dialog.open(AddTrainerDocsComponent, {
      width: '800px',
      height: '400px',
      position: {
        left: '30vw'
      },
    })
  }
  viewFile(filePath: any) {
    this.dialog.open(ViewExampleComponent, {
      width: '800px',
      height:'700px',
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