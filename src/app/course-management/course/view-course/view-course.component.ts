import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  id!: number;
  data: any;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe((data: Course) => {
      this.data = {
        courseId: data.id,
        courseName: data.name,
      }
    })

  }
}