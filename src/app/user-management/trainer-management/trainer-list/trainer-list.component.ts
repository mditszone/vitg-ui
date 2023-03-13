import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableData } from 'src/app/shared/model/table.data';
import { Trainer } from 'src/app/shared/model/trainer';
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
    private userService: UserService, public route: ActivatedRoute) {
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
        ]
        const arr = this.tableData.createtRowData([val.id, val.name, val.phoneNumber], actions);
        this.tableData.rowData.push(arr);
      });
    });
  }

}

