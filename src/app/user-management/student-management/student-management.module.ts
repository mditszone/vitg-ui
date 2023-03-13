import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagementRoutingModule } from './student-management-routing.module';
import { ViewStudentComponent } from './view-student/view-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { StudentTabsComponent } from './student-tabs/student-tabs.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { StudentSubcourseComponent } from './student-subcourse/student-subcourse.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  declarations: [
    ViewStudentComponent,
    EditStudentComponent,
    StudentTabsComponent,
    StudentSubcourseComponent
  ],
  imports: [
    CommonModule,
    StudentManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    MaterialModule,
    SharedModuleModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class StudentManagementModule { }
