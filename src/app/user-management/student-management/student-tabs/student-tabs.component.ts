import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-tabs',
  templateUrl: './student-tabs.component.html',
  styleUrls: ['./student-tabs.component.scss']
})
export class StudentTabsComponent implements OnInit {

  studentTabs: any[];
  constructor() {
    this.studentTabs = [
      {
        label: 'UpdateStudent',
        link: './updateStudent',
        index: 0
      },
      {
        label: 'StudentAccess',
        link: './access',
        index: 1
      }
    ]
  }

  ngOnInit(): void {
  }

}