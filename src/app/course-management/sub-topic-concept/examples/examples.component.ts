import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  subTopicConceptdata!: SubTopicConcept;
  subTopicConceptForm: any;
  errorMessage: any
  subTopicConceptId: any
  selectedFiles: File[];

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) {
  }


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      examples: ['', [Validators.required]]
    }),
      this.patchValue();
  }

  patchValue() {
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
      })
    }
    this.subTopicConceptDetailsForm.patchValue({
      examples: this.subTopicConceptdata.examples
    })
  }

  public onUploadChangeExamples(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(fileCategory: string) {
    if (this.selectedFiles) {
      this.courseService.pushFileToStorage(this.selectedFiles, this.subTopicConceptId, fileCategory).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopicConceptTab/subtopicConceptYoutubeUrl']);
          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        })
    }
  }
}