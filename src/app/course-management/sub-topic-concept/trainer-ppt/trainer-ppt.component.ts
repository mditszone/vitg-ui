
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import { TabService } from 'src/app/shared/services/tab.service';
@Component({
  selector: 'app-trainer-ppt',
  templateUrl: './trainer-ppt.component.html',
  styleUrls: ['./trainer-ppt.component.scss']
})
export class TrainerPptComponent implements OnInit {

  fileName: string;
  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  subTopicConceptdata!: SubTopicConcept;
  submitted!: boolean;
  subTopicConceptForm: any;
  errorMessage: any;
  subTopicConceptId:any

  constructor(
    private tabService:TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) { this.fileName = ""; }


  ngOnInit(): void {
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      trainerPpt: ['', [Validators.required]]
    }),
      this.patchValue();
  }

  public onUploadChangeTrainerPpt(evt: any): void {
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
      this.subTopicConcept.trainerPpt = newFileArray;
    }, false);

    if (file) {
      //reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
    }
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
      trainerPpt: this.subTopicConceptdata.trainerPpt
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

      this.subTopicConceptdata.trainerPpt = this.subTopicConceptForm.trainerPpt;

      this.courseService.updateSubTopicConceptInfo(this.subTopicConceptdata).subscribe(
        (data: any) => {
          this.router.navigate(['/subtopicConceptTab/examples']);

          (error) => {
            this.errorMessage = error.error.message;
            console.log(this.errorMessage)
          }
        });
    }
  }
}






















// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
// import { CourseService } from 'src/app/shared/services/course.service';
// @Component({
//   selector: 'app-trainer-ppt',
//   templateUrl: './trainer-ppt.component.html',
//   styleUrls: ['./trainer-ppt.component.scss']
// })
// export class TrainerPptComponent implements OnInit {

//   fileName: string;
//   subTopicConcept: SubTopicConcept = new SubTopicConcept();
//   subTopicConceptDetailsForm: any;
//   subTopicConceptdata!: SubTopicConcept;
//   submitted!: boolean;
//   subTopicConceptForm: any;
//   errorMessage: any;

//   file: any

//   constructor(private formBuilder: FormBuilder,
//     private router: Router,
//     private route: ActivatedRoute,
//     private courseService: CourseService) {
//     this.fileName = "";
//   }

//   ngOnInit(): void {
//     this.subTopicConceptDetailsForm = this.formBuilder.group({
//       trainerPpt: ['', [Validators.required]]
//     }),
//       this.patchValue();
//   }

//   public onUploadChangeTrainerPpt(evt: any): void {
//     this.file = evt.target.files[0];
//   }

//   patchValue() {
//     this.route.queryParams.subscribe(params => {
//       console.log(params["id"]);
//       let subTopicConceptId: number = parseInt(params["id"]);
//       this.courseService.getSubTopicConceptById(subTopicConceptId).subscribe((subTopicConcept) => {
//         this.subTopicConceptdata = subTopicConcept;
//       })
//     })
//   }
//   createSubTopicConcept() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.subTopicConceptDetailsForm.invalid) {
//       return;
//     }
//     else {
//       this.subTopicConceptdata = this.file;
//       this.courseService.pushFileToStorage(this.subTopicConceptdata).subscribe(
//         (data: any) => {
//           this.router.navigate(['/subtopicConceptTab/examples'], { queryParams: { id: data['id'] } });
//           (error) => {
//             this.errorMessage = error.error.message;
//             console.log(this.errorMessage)
//           }
//         }
//       );
//     }
//   }
// }

