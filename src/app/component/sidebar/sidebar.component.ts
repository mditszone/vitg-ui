import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/model/course';
import { NavItem } from 'src/app/shared/model/nav-item';
import { RoleEnum } from 'src/app/shared/utilities/role.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: NavItem[] = [];
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    const userInfo = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    const role = userInfo.vitgStaffDTO.role.roleName;
    this.menuItems = this.navItems.filter((menuItem) => menuItem.roles?.includes(role));
  }

  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  sidenavSmall: boolean = false;

  onLoggedout() {
    this.router.navigate(['/']);
    sessionStorage.clear();
  }

  sidenavToggle() {
    this.sidenavSmall = !this.sidenavSmall;
  }

  navItems: NavItem[] = [

    // {
    //   displayName: 'Dashboard',
    //   iconName: 'dashboard',
    //   route: 'dashboard',
    //   roles: [
    //     RoleEnum.ADMIN,
    //     RoleEnum.ACCOUNTANT,
    //     RoleEnum.GUEST,
    //     RoleEnum.TRAINER,
    //     RoleEnum.MANAGER,
    //     RoleEnum.ORGANIZER,
    //     RoleEnum.STUDENT
    //   ]
    // },
    {
      displayName: 'User management',
      iconName: 'person',
      children: [
        {
          displayName: 'Staff',
          iconName: '',
          route: 'staff',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Student',
          iconName: '',
          route: 'student',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Trainer',
          iconName: '',
          route: 'trainer',
          roles: [
            RoleEnum.ADMIN
          ]
        }
      ]
    },
    /////
    {
      displayName: 'Course management',
      iconName: 'book',
      children: [
        {
          displayName: 'Course',
          iconName: '',
          route: 'course',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Sub Course',
          iconName: '',
          route: 'subcourse',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Topic',
          iconName: '',
          route: 'topic',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Sub Topic',
          iconName: '',
          route: 'subtopic',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Sub Topic Concept',
          iconName: '',
          route: 'subTopicConcept',
          roles: [
            RoleEnum.ADMIN
          ]
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
          route: 'batches',
          roles: [
            RoleEnum.ADMIN,
            RoleEnum.TRAINER
          ]
        },
        {
          displayName: 'Tracking',
          iconName: '',
          route: 'tracking',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Send Invitation',
          iconName: '',
          route: 'sendInvitation',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Send SMS',
          iconName: '',
          route: 'sendSms',
          roles: [
            RoleEnum.ADMIN
          ]
        }
      ]
    },
    {
      displayName: 'Application management',
      iconName: 'manage_accounts',
      children: [
        {
          displayName: 'Slider',
          iconName: '',
          route: 'slider',
          roles: [
            RoleEnum.ADMIN
          ]
        },
        {
          displayName: 'Settings',
          iconName: '',
          route: 'settings',
          roles: [
            RoleEnum.ADMIN
          ]
        }
      ]
    }

  ];

}