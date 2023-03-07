import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-add-examples',
  templateUrl: './add-examples.component.html',
  styleUrls: ['./add-examples.component.scss']
})
export class AddExamplesComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  subTopicConceptdata!: SubTopicConcept;
  subTopicConceptForm: any;
  errorMessage: any
  subTopicConceptId: any
  selectedFiles: File[];
  examplesTabData: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService,
    private dialogRef: MatDialogRef<AddExamplesComponent>) {
  }


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      examples: ['', [Validators.required]]
    });
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

  public onUploadChangeExamples(event: any): void {
    this.selectedFiles = [...event.target.files]
  }

  removeSelectedFile(index) {
    this.selectedFiles.splice(index, 1);
  }

  uploadFiles(fileCategory: string) {
    if (this.selectedFiles) {
      this.courseService.pushFileToStorage(this.selectedFiles, this.subTopicConceptId, fileCategory).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopicConceptTab/subtopicConceptYoutubeUrl']);
          this.dialogRef.close([]);
        })
    }
  }
}
