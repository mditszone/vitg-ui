
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';

@Component({
  selector: 'app-add-sub-course',
  templateUrl: './add-sub-course.component.html',
  styleUrls: ['./add-sub-course.component.scss']
})
export class AddSubCourseComponent implements OnInit {
  subCourse: Subcourse = new Subcourse();
  subCourseDetailsForm: any;
  submitted!: boolean;
  courseList:any;
  errorMessage:any;
  data:any;
  subCourseForm:any;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      course: ['', [Validators.required]],
      durationDays:['', [Validators.required]],
      durationHours:['', [Validators.required]],
      fee:['', [Validators.required]],
      overview:['', [Validators.required]],
      curriculum:['', [Validators.required]],
      examCertification:['', [Validators.required]],
      trainingMode:['', [Validators.required]]
    }),
      this.getCoursesList();
      this.patchValue();
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      console.log(data);
      this.courseList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }
  
  get f() { return this.subCourseDetailsForm.controls; }

  patchValue() {

      this.subCourseDetailsForm.patchValue({
        name: this.data.name,
        course: this.data.course,
        durationDays: this.data.durationdays,
        durationHours: this.data.durationhours,
        fee: this.data.fee,
        overview: this.data.overview,
        curriculum: this.data.curriculum,
        examCertification: this.data.examCertification,
        trainingMode: this.data.trainingMode,
      });
  }

  createSubCourse() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subCourseDetailsForm.invalid) {
      return;
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;


      this.subCourse.name = this.subCourseForm.name;
      this.subCourse.course = this.subCourseForm.course;
      this.subCourse.durationDays = this.subCourseForm.durationDays;
      this.subCourse.durationHours = this.subCourseForm.durationHours;
      this.subCourse.fee = this.subCourseForm.fee;
      this.subCourse.overview = this.subCourseForm.overview;
      this.subCourse.curriculum = this.subCourseForm.curriculum;
      this.subCourse.examCertification = this.subCourseForm.examCertification;
      this.subCourse.trainingMode = this.subCourseForm.trainingMode;


     
      this.courseService.createSubCourse(this.subCourse).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subcourse']);
        }),
        (error) => {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage)
        };
    }
  }

  editor = ClassicEditor;
  overviewdata: any = `<p>Hello, vitg!</p>`;
 
  config = {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'backgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters',
      
       '|', 'colors', 
      ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }
  

}

