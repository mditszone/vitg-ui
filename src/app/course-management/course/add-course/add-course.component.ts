import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadAdapter } from 'src/app/shared/model/ckuploader';
import { Course } from 'src/app/shared/model/course';
import { CourseService } from 'src/app/shared/services/course.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  fileName: string;
  course: Course = new Course();
  submitted = false;

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

  ngOnInit() { }

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
}
