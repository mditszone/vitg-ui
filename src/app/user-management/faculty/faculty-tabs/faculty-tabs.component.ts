import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-tabs',
  templateUrl: './faculty-tabs.component.html',
  styleUrls: ['./faculty-tabs.component.scss']
})
export class FacultyTabsComponent implements OnInit {

  facultyTabs: any[];
  constructor() {
    this.facultyTabs = [
      {
        label: 'UpdateFaculty',
        link: './updateFaculty',
        index: 0
      },
      {
        label: 'FacultyAccess',
        link: './facultyAccess',
        index: 1
      }
    ]
  }
  ngOnInit(): void {
  }

}
