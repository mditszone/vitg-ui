import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
@Component({
  selector: 'app-subtopic-concept-youtube-url',
  templateUrl: './subtopic-concept-youtube-url.component.html',
  styleUrls: ['./subtopic-concept-youtube-url.component.scss']
})
export class SubtopicConceptYoutubeUrlComponent implements OnInit {

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
      youtubeUrl: ['', [Validators.required]]

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
      youtubeUrl: this.subTopicConceptdata.youtubeUrl
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

      this.subTopicConceptdata.youtubeUrl = this.subTopicConceptForm.youtubeUrl;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopicConceptTab/githubUrl'], { queryParams: { id: data['id'] } });

          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        });
    }
  }
}

