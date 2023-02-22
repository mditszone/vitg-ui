import { Component, OnInit } from '@angular/core';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-sub-topic-concept-list',
  templateUrl: './sub-topic-concept-list.component.html',
  styleUrls: ['./sub-topic-concept-list.component.scss']
})
export class SubTopicConceptListComponent implements OnInit {

  subTopicConceptData: SubTopicConcept[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllSubTopicConcepts().subscribe(data => {
      this.subTopicConceptData = data;
      console.log(this.subTopicConceptData)
    }); 
  }
  deleteSubTopicConcept(id: number) {
    this.courseService.deleteSUbTopicConceptById(id).subscribe(data => {
      this.subTopicConceptData = this.subTopicConceptData.filter(item => item.id !== id);
    });
  }
}

