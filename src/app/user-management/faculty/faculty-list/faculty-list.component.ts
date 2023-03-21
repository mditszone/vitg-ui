import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/shared/model/table.data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {

  tableData: TableData = new TableData();

  constructor(
    private userService: UserService
  ) {
    this.tableData.headers = ["ID", "USER NAME","PIN", "ACTIONS"];
    this.tableData.nameOfTable = "Faculty List"
    this.tableData.buttonRoute = "/addFaculty"
    this.tableData.buttonName = "Add Faculty"
   }

  ngOnInit(): void {
    this.userService.getAllFaculty().subscribe(response=>{
      response.forEach(val=>{
        const actions = [
          {icon: "visibility", route: '/viewfaculty/', routeArgs: val.id}, 
          {icon: "edit", route: '/editfaculty/', routeArgs: val.id},
          {icon: "delete", route: '/editfaculty/', routeArgs: val.id}
        ]
        const arr = this.tableData.createtRowData([val.id, val.userName,val.pin],actions)
        this.tableData.rowData.push(arr)
      })
    })
  }

}