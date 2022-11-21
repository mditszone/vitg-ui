import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/shared/model/staff';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  staffdata: any;
  id!: number;
  errorMessage:string="";

  constructor(private userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.userService.getStaffById(this.id).subscribe((data: Staff) => {
      this.staffdata = data;
    }),
    (error) => {
      this.errorMessage = error.error.message;
      console.log(this.errorMessage)
    };
  }

}