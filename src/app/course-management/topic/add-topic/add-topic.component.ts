import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topic } from 'src/app/shared/model/topic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {

  topic: Topic = new Topic();
  topicDetailsForm: any;
  submitted!: boolean;
  courseList: any;
  subCourseListById: any;
  data: any;
  id!: number;
  topicForm: any;
  errorMessage: any

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.topicDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      course: ['', [Validators.required]],
      subCourse: ['', [Validators.required]]
    }),

      this.getCoursesList();
    this.getSubCourseList(this.data);
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
    //console.log(data.value.id);
    this.route.snapshot.params['id']
    this.courseService.getSubCourseListByCourseId(data.value.id).subscribe((data: Topic) => {
      console.log(data);
      this.subCourseListById = data;
      (error: any) =>
        this.errorMessage = error;
    })
  }

  get f() { return this.topicDetailsForm.controls; }

  patchValue() {

    this.topicDetailsForm.patchValue({
      name: this.data.name,
      course: this.data.course,
      subCourse: this.data.subCourse,
    });
  }

  createTopic() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.topicDetailsForm.invalid) {
      return;
    }
    else {
      this.topicForm = this.topicDetailsForm.value;

      this.topic.name = this.topicForm.name;
      this.topic.course = this.topicForm.course;
      this.topic.subCourse = this.topicForm.subCourse;

      this.courseService.createTopic(this.topic).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/topic']);
        });
    }
  }
}
