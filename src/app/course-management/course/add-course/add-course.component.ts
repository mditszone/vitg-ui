import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { CourseService } from 'src/app/shared/services/course.service';
import ClassicEditor from '@haifahrul/ckeditor5-build-rich';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  fileName: string;
  course: Course = new Course();
  submitted = false;

  editor = ClassicEditor;
  data: any = `<p>Hello, vitg!</p>`;

  courseDetailsForm = this.formBuilder.group({
    name: [{ value: '', disabled: false }],
    image: ['', Validators.required],
    status: ['', Validators.required],
    description: ['', Validators.required]

  });
  constructor(
    private courseService: CourseService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.fileName = "";
  }

  ngOnInit() {

  }

  public onUploadChange(event: any): void {
    const reader = new FileReader;
    const file = event.target.files[0];
    this.fileName = file.name;
    //this.course.name = file.name;

    reader.addEventListener("load", () => {
      const arr = new Uint8Array(<ArrayBuffer>reader.result);
      var newFileArray: Array<number> = [];
      if (arr.length > 0) {
        for (let i: number = 0; i < arr.length; i++) {
          newFileArray.push(arr[i]);
        }
      }
      this.course.image = newFileArray;
    }, false);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
  createCourse() {
    this.submitted = true;
    this.course.status = true;
    this.courseService.createCourse(this.course).subscribe(data => {
      console.log(data)
      this.router.navigate(['/course']);
    });
    (error: any) => console.log(error);
  }
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
