import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subtopic } from 'src/app/shared/model/subtopic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-add-sub-topic',
  templateUrl: './add-sub-topic.component.html',
  styleUrls: ['./add-sub-topic.component.scss']
})
export class AddSubTopicComponent implements OnInit {

  subTopic: Subtopic = new Subtopic();
  subTopicDetailsForm: any;
  id!: number;
  data: any;
  submitted!: boolean;
  subTopicForm: any;
  courseList: any;
  subCourseList: any;
  topicList: any;
  errorMessage: any

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.subTopicDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      course: ['', [Validators.required]],
      subCourse: ['', [Validators.required]],
      topic: ['', [Validators.required]]
    }),
      this.getCoursesList();
    this.getSubCourseList(this.data);
    this.getTopicList(this.data);
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
    console.log(data.value.id);
    this.route.snapshot.params['id']
    this.courseService.getSubCourseListByCourseId(data.value.id).subscribe((data: Subtopic) => {
      console.log(data)
      this.subCourseList = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }
  getTopicList(data: any) {
    console.log(data)
    this.route.snapshot.params['id']

    this.courseService.getTopicListBySubCourseId(data.value.id).subscribe((data: Subtopic) => {
      console.log(data)
      this.topicList = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }

  get f() { return this.subTopicDetailsForm.controls; }

  patchValue() {

    this.subTopicDetailsForm.patchValue({
      name: this.data.name,
      course: this.data.course,
      subCourse: this.data.subCourse,
      topic: this.data.topic
    });
  }

  createSubTopic() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.subTopicDetailsForm.invalid) {
      return;
    }
    else {
      this.subTopicForm = this.subTopicDetailsForm.value;

      this.subTopic.name = this.subTopicForm.name;
      this.subTopic.course = this.subTopicForm.course;
      this.subTopic.subCourse = this.subTopicForm.subCourse;
      this.subTopic.topic = this.subTopicForm.topic;

      this.courseService.createSubTopic(this.subTopic).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/subtopic']);
        })
    }
  }

}