import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialScreenRoutingModule } from './material-screen-routing.module';
import { MaterialScreenComponent } from './material-screen/material-screen.component';
import { MaterialMenuComponent } from './material-menu/material-menu.component';
import { MaterialModule } from '../shared/module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllCoursesMenuComponent } from './all-courses-menu/all-courses-menu.component';
import { MaterialAllcourseTabsComponent } from './material-allcourse-tabs/material-allcourse-tabs.component';


@NgModule({
  declarations: [
    MaterialScreenComponent,
    MaterialMenuComponent,
    AllCoursesMenuComponent,
    MaterialAllcourseTabsComponent,
  ],
  imports: [
    CommonModule,
    MaterialScreenRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    FlexLayoutModule
  ]
})

export class MaterialScreenModule { }
