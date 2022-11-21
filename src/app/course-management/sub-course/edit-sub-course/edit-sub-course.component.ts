import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';

@Component({
  selector: 'app-edit-sub-course',
  templateUrl: './edit-sub-course.component.html',
  styleUrls: ['./edit-sub-course.component.scss']
})
export class EditSubCourseComponent implements OnInit {
  subCourseDetailsForm: any;
  id!: number;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subCourseDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      durationDays: ['', [Validators.required]],
      durationHours: ['', [Validators.required]],
      fee: ['', [Validators.required]],
      overview: ['', [Validators.required]],
      curriculum: ['', [Validators.required]],
      examCertification: ['', [Validators.required]],
      trainingMode: ['', [Validators.required]]

    }),
      this.patchValue();
  }

  patchValue() {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getSubCourseById(this.id).subscribe((data: Subcourse) => {
      console.log(data);
      this.subCoursedata = data;
    });
    this.subCourseDetailsForm.patchValue({
      id: this.subCoursedata.id,
      name: this.subCoursedata.name,
      durationDays: this.subCoursedata.durationDays,
      durationHours: this.subCoursedata.durationHours,
      fee: this.subCoursedata.fee,
      overview: this.subCoursedata.overview,
      curriculum: this.subCoursedata.curriculum,
      examCertification: this.subCoursedata.examCertification,
      trainingMode: this.subCoursedata.trainingMode,
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.name = this.subCourseForm.name;
      this.subCoursedata.durationDays = this.subCourseForm.durationDays;
      this.subCoursedata.durationHours = this.subCourseForm.durationHours;
      this.subCoursedata.fee = this.subCourseForm.fee;
      this.subCoursedata.overview = this.subCourseForm.overview;
      this.subCoursedata.curriculum = this.subCourseForm.curriculum;
      this.subCoursedata.examCertification = this.subCourseForm.examCertification;
      this.subCoursedata.trainingMode = this.subCourseForm.trainingMode;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        console.log(this.subCoursedata)
        this.router.navigate(['/subcourse'])
      })
    }

  }
  editor = ClassicEditor;
  ckdata: any = `<p>Hello, vitg!</p>`;
 
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
