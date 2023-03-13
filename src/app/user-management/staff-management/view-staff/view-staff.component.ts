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

  id!: number;
  errorMessage: string = "";
  data: any;
  constructor(private userService: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.userService.getStaffById(this.id).subscribe((data: Staff) => {
      this.data = {
        id: data.id,
        name: data.name,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        roleName: data.role.roleName,
        aadharNumber: data.aadharNumber,
        panCardNumber: data.panCardNumber
      }
    }),
      (error) => {
        this.errorMessage = error.error.message;
        console.log(this.errorMessage)
      };
  }
}