import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-sub-course',
  templateUrl: './view-sub-course.component.html',
  styleUrls: ['./view-sub-course.component.scss']
})
export class ViewSubCourseComponent implements OnInit {
  id!: number;
  subCoursedata:any
  errorMessage:any;
  constructor(private courseService:CourseService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getSubCourseById(this.id).subscribe((data: Subcourse)=>{
      console.log(data);
      this.subCoursedata=data;
    }),
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    };
  }
}
