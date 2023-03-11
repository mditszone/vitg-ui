import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { UploadAdapter } from 'src/app/shared/model/ckuploader';
import { TabService } from 'src/app/shared/services/tab.service';

@Component({
  selector: 'app-add-sub-topic-concept',
  templateUrl: './add-sub-topic-concept.component.html',
  styleUrls: ['./add-sub-topic-concept.component.scss']
})
export class AddSubTopicConceptComponent implements OnInit {

  subTopicConcept: SubTopicConcept = new SubTopicConcept();
  subTopicConceptDetailsForm: any;
  id!: number;
  data: any;
  submitted!: boolean;
  subTopicConceptForm: any;
  courseList: any;
  subCourseList: any;
  topicList: any;
  subTopicList: any;
  errorMessage: any

  constructor(
    private tabService:TabService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.subTopicConceptDetailsForm = this.formBuilder.group({
      course: ['', [Validators.required]],
      subCourse: ['', [Validators.required]],
      topic: ['', [Validators.required]],
      subTopic: ['', [Validators.required]],
      concept: ['', [Validators.required]],
    }),
      this.getCoursesList();
    this.getSubCourseList(this.data);
    this.getTopicList(this.data);
    this.getSubTopicList(this.data);
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe((data: any) => {
      console.log(data);
      this.courseList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }
  getSubCourseList(data: any) {
    this.route.snapshot.params['id']
    this.courseService.getSubCourseListByCourseId(data.value.id).subscribe((data: any) => {
      console.log(data)
      this.subCourseList = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }
  getTopicList(data: any) {
    this.route.snapshot.params['id']
    this.courseService.getTopicListBySubCourseId(data.value.id).subscribe((data: SubTopicConcept) => {
      console.log(data)
      this.topicList = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }
  getSubTopicList(data: any) {
    console.log(data)
    this.route.snapshot.params['id']

    this.courseService.getSubTopicListByTopicId(data.value.id).subscribe((data: SubTopicConcept) => {
      console.log(data)
      this.subTopicList = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }

  get f() { return this.subTopicConceptDetailsForm.controls; }

  patchValue() {

    this.subTopicConceptDetailsForm.patchValue({
      course: this.data.course,
      subCourse: this.data.subCourse,
      topic: this.data.topic,
      subTopic: this.data.subTopic,
      concept: this.data.concept,
    });
  }

  createSubTopicConcept() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subTopicConceptDetailsForm.invalid) {
      return;
    }
    else {
      this.subTopicConceptForm = this.subTopicConceptDetailsForm.value;

      this.subTopicConcept.course = this.subTopicConceptForm.course;
      this.subTopicConcept.subCourse = this.subTopicConceptForm.subCourse;
      this.subTopicConcept.topic = this.subTopicConceptForm.topic;
      this.subTopicConcept.subTopic = this.subTopicConceptForm.subTopic;
      this.subTopicConcept.concept = this.subTopicConceptForm.concept;

      this.courseService.createSubTopicConcept(this.subTopicConcept).subscribe(
        (data: any) => {
          this.tabService.myMethod(data)
          this.router.navigate(['/subtopicConceptTab/subTopicConceptName'],{skipLocationChange: true});
        });
    }
  }
}
