import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent implements OnInit {
  finalSubcourseList: Array<Subcourse> = [];
  SubcourseList: Array<Subcourse> = [];
  base64Image: any
  constructor(private courseService: CourseService, private zone: NgZone, private route: Router) { }

  ngOnInit(): void {
    this.courseService.getAllSubCourses().subscribe((data: any) => {
      console.log("cards data", data);

      for (var object of data) {
        let subcourse = new Subcourse();
        let course = new Course();
        let ext = object.name.split('.')[1]; // get image extension[png, jpeg, jpg]
        this.base64Image = `data:image/${ext};base64,${object.image}`;
        //this.finalSubcourseList.push();
        console.log(object.course.name);

        subcourse.id = object.id;
        subcourse.name = object.name;
        course.name = object.course.name;
        subcourse.course = course;
        subcourse.image = this.base64Image;
        this.SubcourseList.push(subcourse);
      }
      this.finalSubcourseList = this.SubcourseList;
    });
  }
  onClick(id: any) {
    this.zone.run(() => this.route.navigate(['/tabComponent'], { queryParams: { subCourseId: id },skipLocationChange: true }));
  }
}
