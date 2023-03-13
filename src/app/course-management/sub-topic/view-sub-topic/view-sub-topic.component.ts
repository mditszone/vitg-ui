import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subtopic } from 'src/app/shared/model/subtopic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-view-sub-topic',
  templateUrl: './view-sub-topic.component.html',
  styleUrls: ['./view-sub-topic.component.scss']
})
export class ViewSubTopicComponent implements OnInit {

  id!: number;
  data: any;
  errorMessage:any;
  constructor(private courseService:CourseService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getSubTopicById(this.id).subscribe((data: Subtopic)=>{
      this.data = {
        subTopicId: data.id,
        subTopicName: data.name
      }
    });
  }
}

