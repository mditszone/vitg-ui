import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/model/student';
import { Action, TableData } from 'src/app/shared/model/table.data';
import { TableDataService } from 'src/app/shared/services/table.data.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  tableData: TableData = new TableData();
  studentdata: Student[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private userService: UserService, public route: ActivatedRoute, private tableDataService: TableDataService) {
    this.tableData.headers = ["ID", "NAME", "PHONE NUMBER", "EMAIL", "ACTIONS"];
    this.tableData.nameOfTable = "Student List";
    this.tableData.buttonRoute = "/addStudent"
    this.tableData.buttonName = "Add Student"
  }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.userService.getAllStudents().subscribe(data => {
      data.forEach(val => {
        const actions = [
          { icon: "visibility", route: '/viewstudent/', routeArgs: val.id },
          { icon: "edit", route: '/studentTab/editstudent/', routeArgs: val.id },
        ];
        const obj = {
          id: val.id,
          name: val.name,
          phoneNumber: val.phoneNumber,
          email: val.email,
          actions: actions
        }
        this.tableData.createtData(obj);
        // const arr = this.tableData.createtRowData([val.id, val.name, val.phoneNumber, val.email], actions);
        // this.tableData.rowData.push(arr);
      });
      this.tableDataService.setTableData(this.tableData);
    });
  }

}

