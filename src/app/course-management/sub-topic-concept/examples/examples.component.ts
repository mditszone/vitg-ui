import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

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
      examples: ['', [Validators.required]]

    }),
      this.patchValue();
  }

  public onUploadChangeExamples(evt: any): void {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.fileName = file.name;
    //this.subTopicConcept.name = file.name;

    reader.addEventListener("load", () => {
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.subTopicConcept.examples = newFileArray;
    }, false);

    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
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
      examples: this.subTopicConceptdata.examples
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
      this.subTopicConceptdata.examples = this.subTopicConceptForm.examples;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopicConceptTab/subtopicConceptYoutubeUrl'], { queryParams: { id: data['id'] } });

          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        });
    }
  }
}
