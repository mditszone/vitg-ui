import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { VerifyStaffComponent } from './verify-staff/verify-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  declarations: [
    ViewStaffComponent,
    EditStaffComponent,
    AddStaffComponent,
    RegisterStaffComponent,
    VerifyStaffComponent
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    MaterialModule,
    SharedModuleModule 
  ]
})
export class StaffManagementModule { }
