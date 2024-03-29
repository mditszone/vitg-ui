import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewExampleComponent } from 'src/app/mainscreen/component/view-example/view-example.component';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { AddExamplesComponent } from '../add-examples/add-examples.component';
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptdata!: SubTopicConcept;
  subTopicConceptId: any
  examplesTabData: any

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

        this.courseService.getFileListsFromS3(response, 'examples').subscribe((response: any) => {
          this.examplesTabData = response
          console.log(this.examplesTabData);
        })
      })
    }
  }

  addFiles() {
    this.dialog.open(AddExamplesComponent, {
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
      height: '700px',
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