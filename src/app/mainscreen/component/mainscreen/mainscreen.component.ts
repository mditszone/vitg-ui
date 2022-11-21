import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/model/menu-item';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      displayName: 'All Courses',
      children: [
        {
          displayName: 'Java',
          children: [
            {
              displayName: 'Corejava',
              route: 'corejava',

            },
            {
              displayName: 'Springboot',
              route: 'springboot',

            },
          ]
        },
        {
          displayName: 'Python',
          children: [
            {
              displayName: 'Flask',
              route: ''
            },
            {
              displayName: 'Core python',
              route: ''
            },
          ]
        },
        {
          displayName: 'Kotlin',
          route: 'kotlin'
        }
      ]
    },
  ];
}
