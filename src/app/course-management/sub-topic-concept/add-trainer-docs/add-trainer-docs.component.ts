import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-add-trainer-docs',
  templateUrl: './add-trainer-docs.component.html',
  styleUrls: ['./add-trainer-docs.component.scss']
})
export class AddTrainerDocsComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  subTopicConceptdata!: SubTopicConcept;
  errorMessage: any;
  subTopicConceptId: any
  selectedFiles: File[]
  trainerTabData:any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService,
    private dialogRef: MatDialogRef<AddTrainerDocsComponent>) {
  }

  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      trainerPpt: ['', [Validators.required]]
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

        this.courseService.getFileListsFromS3(response, 'trainer').subscribe((response: any) => {
          this.trainerTabData = response
          console.log(this.trainerTabData);
        })
      })
    }
  }

  public onUploadChangeTrainerPpt(event: any): void {
    this.selectedFiles = [...event.target.files]
  }
  removeSelectedFile(index){
    this.selectedFiles.splice(index,1);
  }

  uploadFiles(fileCategory: string) {

    if (this.selectedFiles) {
      this.courseService.pushFileToStorage(this.selectedFiles, this.subTopicConceptId, fileCategory).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopicConceptTab/examples']);
          this.dialogRef.close([]);
        })
    }
  }
}
