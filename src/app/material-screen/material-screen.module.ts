import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialScreenRoutingModule } from './material-screen-routing.module';
import { MaterialScreenComponent } from './material-screen/material-screen.component';
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
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { StudentMaterialComponent } from './student-material/student-material.component';


@NgModule({
  declarations: [
    MaterialScreenComponent,
    StudentMaterialComponent,
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
    FlexLayoutModule,
    SharedModuleModule
  ]
})

export class MaterialScreenModule { }
