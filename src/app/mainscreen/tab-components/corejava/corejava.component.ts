import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subcourse } from 'src/app/shared/model/subcourse';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.scss']
})

export class CorejavaComponent implements OnInit {
  id!: number;
  subCoursedata: any
  tabs = ['Overview', 'Curriculum', 'Exam & Certification', 'Training mode', 'Demo', 'Duration', 'Fee'];
  selected = new FormControl(0);

  constructor(public courseService: CourseService, public route: ActivatedRoute) { }

  ngOnInit(): void {

  }
  getSubCourse() {
    this.route.snapshot.params['id'];
    this.courseService.getSubCourseById(this.id).subscribe((res: Subcourse) => {
      console.log(res);
      this.subCoursedata = res;
    })
  }


}
