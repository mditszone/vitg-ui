import { Component, OnInit } from '@angular/core';
import { SubTopicConcept } from 'src/app/shared/model/sub-topic-concept';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';
import { TableDataService } from 'src/app/shared/services/table.data.service';

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
    private courseService: CourseService,private tableDataService: TableDataService) {
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
        const actions = [
          { icon: "visibility", route: '/subtopicConceptTab/editSubTopicConcept/', routeArgs: val.id },
          { icon: "delete", route: '/editcourse/', routeArgs: val.id }
        ];

        const obj = {
          id: val.id,
          concept: val.concept,
          subtopic: val.subTopic.name,
          actions:actions
        }
        this.tableData.createtData(obj)
      });
      this.tableDataService.setTableData(this.tableData);
    });
  }
  deleteSubTopicConcept(id: number) {
    this.courseService.deleteSUbTopicConceptById(id).subscribe(data => {
      this.subTopicConceptData = this.subTopicConceptData.filter(item => item.id !== id);
    });
  }
}

