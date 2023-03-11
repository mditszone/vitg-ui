import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { UploadAdapter } from 'src/app/shared/model/ckuploader';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-sub-topic-concept-name',
  templateUrl: './sub-topic-concept-name.component.html',
  styleUrls: ['./sub-topic-concept-name.component.scss']
})
export class SubTopicConceptNameComponent implements OnInit {

  fileName: string;
  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  subTopicConceptdata!: SubTopicConcept;
  submitted!: boolean;
  subTopicConceptForm: any;
  errorMessage: any;
  subTopicConceptId: any

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) { this.fileName = ""; }

  public Editor = DecoupledEditor;
  public onReady(eventData: any) {
    eventData.ui.getEditableElement().parentElement.insertBefore(
      eventData.ui.view.toolbar.element,
      eventData.ui.getEditableElement()
    );
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader: { file: string; }) {
      console.log('loader : ', loader)
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      concept: ['', [Validators.required]]

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
        this.subTopicConceptdata = subTopicConcept;
        console.log(this.subTopicConceptdata)
      })
    }
    this.subTopicConceptDetailsForm.patchValue({
      concept: this.subTopicConceptdata.concept
    })
  }

  createSubTopicConcept() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subTopicConceptDetailsForm.invalid) {
      return;
    }
    else {
      this.subTopicConceptForm = this.subTopicConceptDetailsForm.value;

      this.subTopicConceptdata.concept = this.subTopicConceptForm.concept;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe((data: any) => {
        this.router.navigate(['/subtopicConceptTab/trainerPpt'],{skipLocationChange: true});
      });
    }
  }

}
