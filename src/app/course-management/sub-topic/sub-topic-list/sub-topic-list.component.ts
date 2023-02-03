import { Component, OnInit } from '@angular/core';
import { Subtopic } from 'src/app/shared/model/subtopic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-sub-topic-list',
  templateUrl: './sub-topic-list.component.html',
  styleUrls: ['./sub-topic-list.component.scss']
})
export class SubTopicListComponent implements OnInit {

 
  subtopicdata: Subtopic[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService) { }


  ngOnInit(): void {
     const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.courseService.getAllSubTopics().subscribe(data => {
      this.subtopicdata = data;
      console.log(this.subtopicdata)
    });
  }
  deleteSubTopic(id: number) {
    this.courseService.deleteSubTopicById(id).subscribe(data => {
      this.subtopicdata = this.subtopicdata.filter(item => item.id !== id);
    });
  }
}