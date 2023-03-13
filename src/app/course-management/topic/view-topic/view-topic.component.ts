import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/shared/model/topic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.scss']
})
export class ViewTopicComponent implements OnInit {
  id!: number
  data: any;
  constructor(public courseService: CourseService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.courseService.getTopicById(this.id).subscribe((data:Topic)=>{
      this.data = {
        id: data.id,
        name: data.name,
      };
    })
  }

}
