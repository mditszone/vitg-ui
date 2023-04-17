import { Component, OnInit } from '@angular/core';
import { Subtopic } from 'src/app/shared/model/subtopic';
import { TableData } from 'src/app/shared/model/table.data';
import { CourseService } from 'src/app/shared/services/course.service';
import { TableDataService } from 'src/app/shared/services/table.data.service';

@Component({
  selector: 'app-sub-topic-list',
  templateUrl: './sub-topic-list.component.html',
  styleUrls: ['./sub-topic-list.component.scss']
})
export class SubTopicListComponent implements OnInit {

  tableData: TableData = new TableData();
  
  subtopicdata: Subtopic[] = [];
  loggedInUserRole: string = "";

  constructor(
    private courseService: CourseService,private tableDataService: TableDataService) { 
      this.tableData.headers = ["SUB TOPIC ID", "SUB TOPIC NAME", "TOPIC NAME", "ACTIONS"];
      this.tableData.nameOfTable = "SubTopic List";
      this.tableData.buttonRoute = "/addSubTopic"
      this.tableData.buttonName = "Add SubTopic"
    }


  ngOnInit(): void {
     const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.courseService.getAllSubTopics().subscribe(data => {
      this.subtopicdata = data;
      data.forEach(val => {
        const actions = [
          { icon: "visibility", route: '/viewsubtopic/', routeArgs: val.id },
          { icon: "edit", route: '/editsubtopic/', routeArgs: val.id },
          { icon: "delete", route: '/editcourse/', routeArgs: val.id }
        ]
        const obj = {
          id: val.id,
          name: val.name,
          topicName:val.topic.name,
          actions: actions
        }
        this.tableData.createtData(obj);
      });
      this.tableDataService.setTableData(this.tableData);
    });
  }
  deleteSubTopic(id: number) {
    this.courseService.deleteSubTopicById(id).subscribe(data => {
      this.subtopicdata = this.subtopicdata.filter(item => item.id !== id);
    });
  }
}