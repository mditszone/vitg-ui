import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerManagementRoutingModule } from './trainer-management-routing.module';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';
import { EditTrainerComponent } from './edit-trainer/edit-trainer.component';
import { RegisterTrainerComponent } from './register-trainer/register-trainer.component';
import { VerifyTrainerComponent } from './verify-trainer/verify-trainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    ViewTrainerComponent,
    EditTrainerComponent,
    RegisterTrainerComponent,
    VerifyTrainerComponent,
    AddTrainerComponent
  ],
  imports: [
    CommonModule,
    TrainerManagementRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class TrainerManagementModule { }
