import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/shared/model/topic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topicdata: Topic[] = [];
  loggedInUserRole: string = "";

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.courseService.getAllTopics().subscribe((data) => {
      this.topicdata = data;
      console.log(this.topicdata)
    })
  }
  deleteTopic(id: number) {
    this.courseService.deleteTopicById(id).subscribe(data => {
      this.topicdata = this.topicdata.filter(item => item.id !== id);
    }
    );
  }
}
