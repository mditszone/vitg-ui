import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  staffDTO: any;
  url:any

  constructor() {
    this.staffDTO = JSON.parse(sessionStorage.getItem('staff_dto') || '{}')
  }
}
