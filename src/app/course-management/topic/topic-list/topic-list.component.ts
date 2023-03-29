import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TableData } from 'src/app/shared/model/table.data';
import { Topic } from 'src/app/shared/model/topic';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {
  tableData: TableData = new TableData();
  topicdata: Topic[] = [];
  loggedInUserRole: string = "";

  constructor(private courseService: CourseService) {
      this.tableData.headers = ["ID", "TOPIC NAME", "COURSE NAME", "SUB COURSE NAME", "ACTIONS"];
      this.tableData.nameOfTable = "Topic List";
      this.tableData.buttonRoute = "/addTopic"
      this.tableData.buttonName = "Add Topic"
  }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.courseService.getAllTopics().subscribe((data) => {
      data.forEach(val => {
        const actions = [
          { icon: "visibility", route: '/viewtopic/', routeArgs: val.id },
          { icon: "edit", route: '/edittopic/', routeArgs: val.id },
          { icon: "delete", route: '/editcourse/', routeArgs: val.id }
        ]
        const obj = {
          id: val.id,
          name: val.name,
          subCourseName:val.subCourse.name,
          actions: actions
        }
        this.tableData.createtData(obj);
        // let arr = [];
        // arr.push(val.id);
        // arr.push(val.name);
        // arr.push(val.subCourse.course.name);
        // arr.push(val.subCourse.name);
        // arr.push([
        //   {icon: "visibility", route: '/viewtopic/', routeArgs: val.id}, 
        //   {icon: "edit", route: '/edittopic/', routeArgs: val.id},
        //   {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        // ]);
        // this.tableData.rowData.push(arr);
      });
    });
  }

  deleteTopic(id: number) {
    this.courseService.deleteTopicById(id).subscribe(data => {
      this.topicdata = this.topicdata.filter(item => item.id !== id);
    }
    );
  }
}
