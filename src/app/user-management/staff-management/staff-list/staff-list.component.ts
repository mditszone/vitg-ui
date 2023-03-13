import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/shared/model/staff';
import { TableData } from 'src/app/shared/model/table.data';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  tableData: TableData = new TableData();
  staffdata: Staff[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(private userService: UserService, public route: ActivatedRoute) {
      this.tableData.headers = ["ID", "NAME", "PHONE NUMBER", "ROLE", "ACTIONS"];
      this.tableData.nameOfTable = "Staff List";
      this.tableData.buttonRoute = "/staffRegister"
      this.tableData.buttonName = "Add Staff"
  }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.userService.getAllStaff().subscribe(data => {
      data.forEach(val => {
        const actions = [
          {icon: "visibility", route: '/viewstaff/', routeArgs: val.id}, 
          {icon: "edit", route: '/editstaff/', routeArgs: val.id},
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ]
        const arr = this.tableData.createtRowData([val.id, val.name, val.phoneNumber, val.role.roleName], actions);
        this.tableData.rowData.push(arr);
      });
    });
  }
  
  deleteStaff(id: number) {
    this.userService.deleteStaffById(id).subscribe((res: any) => {
      this.staffdata = this.staffdata.filter(item => item.id != id);
    })
  }


}

