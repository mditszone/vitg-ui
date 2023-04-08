import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableData } from 'src/app/shared/model/table.data';
import { Trainer } from 'src/app/shared/model/trainer';
import { TableDataService } from 'src/app/shared/services/table.data.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  tableData: TableData = new TableData();
  trainerdata: Trainer[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private userService: UserService, public route: ActivatedRoute, private tableDataService: TableDataService) {
      this.tableData.headers = ["ID", "NAME", "PHONE NUMBER", "ACTIONS"];
      this.tableData.nameOfTable = "Trainer List";
      this.tableData.buttonRoute = "/trainerRegister"
      this.tableData.buttonName = "Add Trainer"
    }


  ngOnInit(): void {

    this.userService.getAllTrainers().subscribe(data => {
      data.forEach(val => {
        const actions = [
          {icon: "visibility", route: '/viewtrainer/', routeArgs: val.id}, 
          {icon: "edit", route: '/edittrainer/', routeArgs: val.id},
        ];
        const obj = {
          id: val.id,
          name: val.name,
          phoneNumber: val.phoneNumber,
          actions: actions
        }
        this.tableData.createtData(obj);
        // const arr = this.tableData.createtRowData([val.id, val.name, val.phoneNumber], actions);
        // this.tableData.rowData.push(arr);
      });
      this.tableDataService.setTableData(this.tableData);
    });
  }

}

