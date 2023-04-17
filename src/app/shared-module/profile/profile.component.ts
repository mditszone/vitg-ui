import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  staffDTO: any;
  url: any

  constructor() { }

  ngOnInit() {
    this.staffDTO = JSON.parse(sessionStorage.getItem('staff_dto') || '{}')
  }
}
