import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/shared/model/staff';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  staffdata: Staff[] = [];
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private userService: UserService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.userService.getAllStaff().subscribe(data => {
      this.staffdata = data;
      console.log(this.staffdata)
    });
  }
  deleteStaff(id: number) {
    this.userService.deleteStaffById(id).subscribe((res: any) => {
      this.staffdata = this.staffdata.filter(item => item.id != id);
    })
  }


}

