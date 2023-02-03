import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
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
  errorMessage: any

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) { this.fileName = ""; }


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      otherUrls: ['', [Validators.required]]

    }),
      this.patchValue();
  }

  

  patchValue() {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      let subTopicConceptId: number = parseInt(params["id"]);
      this.courseService.getSubTopicConceptById(subTopicConceptId).subscribe((subTopicConcept) => {
        console.log(subTopicConcept);
        this.subTopicConceptdata = subTopicConcept;
        console.log(this.subTopicConceptdata)
      })
    })
    this.subTopicConceptDetailsForm.patchValue({
      otherUrls: this.subTopicConceptdata.otherUrls
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

      this.subTopicConceptdata.otherUrls = this.subTopicConceptForm.otherUrls;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/dashboard'], { queryParams: { id: data['id'] } });

          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        });
    }
  }
}
