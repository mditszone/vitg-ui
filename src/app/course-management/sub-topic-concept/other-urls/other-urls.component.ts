import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';
@Component({
  selector: 'app-other-urls',
  templateUrl: './other-urls.component.html',
  styleUrls: ['./other-urls.component.scss']
})
export class OtherUrlsComponent implements OnInit {

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


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      otherUrls: ['', [Validators.required]]

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
      otherUrls: this.subTopicConceptdata.otherUrls
    })
  }

  saveOtherUrls() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subTopicConceptDetailsForm.invalid) {
      return;
    }
    else {
      this.subTopicConceptForm = this.subTopicConceptDetailsForm.value;

      this.subTopicConceptdata.otherUrls = this.subTopicConceptForm.otherUrls;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subTopicConcept']);

          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        });
    }
  }
}
