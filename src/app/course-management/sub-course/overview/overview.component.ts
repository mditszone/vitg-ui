import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { UploadAdapter } from 'src/app/shared/model/ckuploader';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  subCourseDetailsForm: any
  subCoursedata!: Subcourse;
  submitted!: boolean;
  subCourseForm: any;
  subCourseId: any

  constructor(
    private tabService: TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService) { }


  public Editor = DecoupledEditor;
  data: any = `<p>Hello, world!</p>`;
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
      overview: [null, [Validators.required]]
    })
    this.patchValue();
  }

  patchValue() {
    var response = JSON.parse(sessionStorage.getItem('tabServiceData') || '{}')
    {
      if (response.id) {
        this.subCourseId = response.id;
        console.log(this.subCourseId)
      }
      else {
        this.subCourseId = response;
        console.log(this.subCourseId)
      }

      this.courseService.getSubCourseById(this.subCourseId).subscribe((subCourse: Subcourse) => {
        this.subCoursedata = subCourse;
        console.log("Getting object by passing id", this.subCoursedata)
      })
    }
    this.subCourseDetailsForm.patchValue({
      overview: this.subCoursedata.overview
    })
  }

  updateSubCourse() {
    this.submitted = true;
    if (this.subCourseDetailsForm.invalid) {
      return
    }
    else {
      this.subCourseForm = this.subCourseDetailsForm.value;

      this.subCoursedata.overview = this.subCourseForm.overview;

      this.courseService.updateSubCourse(this.subCoursedata).subscribe(data => {
        this.subCoursedata = data;
        this.router.navigate(['/subCourseTab/curriculum'])
      })
    }
  }
}
