import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/shared/model/nav-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @ViewChild('sidenav', {static:false}) sidenav!: MatSidenav;
  sidenavSmall:boolean = false;
  
  onLoggedout() {
    this.router.navigate(['/']);
  }
  
  sidenavToggle(){
    this.sidenavSmall = !this.sidenavSmall;
  }

  
  constructor(public router:Router) {}

  navItems: NavItem[] = [

    {
      displayName: 'User management',
      iconName: 'person',
      children: [
        {
          displayName: 'Staff',
          iconName: '',
          route: 'staff'
        },
        {
          displayName: 'Student',
          iconName: '',
          route: 'student'
        },
        {
          displayName: 'Trainer',
          iconName: '',
          route: 'trainer'
        }
      ]
    },
        ///////
    {
      displayName: 'Course management',
      iconName: 'book',
      children: [
        {
          displayName: 'Course',
          iconName: '',
          route: 'course'
        },
        {
          displayName: 'Sub Course',
          iconName: '',
          route: 'subcourse'
        },
        {
          displayName: 'Topic',
          iconName: '',
          route: 'topic'
        },
        {
          displayName: 'Sub Topic',
          iconName: '',
          route: 'subtopic'
        },
        {
          displayName: 'Sub Topic Concept',
          iconName: '',
          route: 'subtopicconcept'
        }
      ]
    },
    ////////
 
    
    {
      displayName: 'Batch management',
      iconName: 'group',
      children: [
        {
          displayName: 'Batches',
          iconName: '',
          route: 'batches'
        },
        {
          displayName: 'Tracking',
          iconName: '',
          route: 'tracking'
        }
      ]
    },
    {
      displayName: 'Application management',
      iconName: 'group',
      children: [
        {
          displayName: 'Slider',
          iconName: '',
          route: 'slider'
        },
        {
          displayName: 'Settings',
          iconName: '',
          route: 'settings'
        }
      ]
    },
    
  ];

}