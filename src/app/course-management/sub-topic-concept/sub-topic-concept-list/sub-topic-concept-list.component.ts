import { Component, OnInit } from '@angular/core';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-sub-topic-concept-list',
  templateUrl: './sub-topic-concept-list.component.html',
  styleUrls: ['./sub-topic-concept-list.component.scss']
})
export class SubTopicConceptListComponent implements OnInit {
  tableData: TableData = new TableData();
  subTopicConceptData: SubTopicConcept[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private courseService: CourseService) { 
      this.tableData.headers = ["ID", "SUBTOPIC CONCEPT", "SUB TOPIC", "ACTIONS"];
      this.tableData.nameOfTable = "SubTopicConcept List";
      this.tableData.buttonRoute = "/addSubTopicConcept"
      this.tableData.buttonName = "Add SubTopicConcept"
    }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.courseService.getAllSubTopicConcepts().subscribe(data => {
      this.subTopicConceptData = data;
      data.forEach(val => {
        let arr = [];
        arr.push(val.id);
        arr.push(val.concept);
        arr.push(val.subTopic.name)
        arr.push([
          {icon: "visibility", route: '/subtopicConceptTab/editSubTopicConcept/', routeArgs: val.id}, 
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ]);
        this.tableData.rowData.push(arr);
      });
    }); 
  }
  deleteSubTopicConcept(id: number) {
    this.courseService.deleteSUbTopicConceptById(id).subscribe(data => {
      this.subTopicConceptData = this.subTopicConceptData.filter(item => item.id !== id);
    });
  }
}

