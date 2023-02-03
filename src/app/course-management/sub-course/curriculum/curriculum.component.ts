import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { UploadAdapter } from 'src/app/shared/model/ckuploader';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  subCourseDetailsForm: any;
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any

  constructor(private formBuilder: FormBuilder,
    private router: Router, private route: ActivatedRoute,
    private courseService: CourseService) { }

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
    this.subCourseDetailsForm = this.formBuilder.group({
      curriculum: ['', [Validators.required]]
    }),
      this.patchValue();
  }

  patchValue() {
    this.route.queryParams.subscribe(params => {
      console.log(params["id"]);
      let subCourseId: number = parseInt(params["id"]);
      this.courseService.getSubCourseById(subCourseId).subscribe((subCourse) => {
        this.subCoursedata = subCourse;
      })
    })

    this.subCourseDetailsForm.patchValue({
      curriculum: this.subCoursedata.curriculum,
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.curriculum = this.subCourseForm.curriculum;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        console.log(this.subCoursedata)
        this.router.navigate(['/subCourseTab/durationDays'], { queryParams: { id: data['id'] } })
      })
    }
  }
}
