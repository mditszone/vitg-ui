import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { VerifyStaffComponent } from './verify-staff/verify-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'staffRegister', pathMatch: 'full',
        component: RegisterStaffComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'verifyStaff', pathMatch: 'full',
        component: VerifyStaffComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addStaff', pathMatch: 'full',
        component: AddStaffComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewstaff/:id', pathMatch: 'full',
        component: ViewStaffComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'editstaff/:id', pathMatch: 'full',
        component: EditStaffComponent
      }]
  },



 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
