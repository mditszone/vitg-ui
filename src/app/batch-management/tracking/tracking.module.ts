import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { TrackingListComponent } from './tracking-list/tracking-list.component';
import { AddTrackingComponent } from './add-tracking/add-tracking.component';
import { EditTrackingComponent } from './edit-tracking/edit-tracking.component';
import { ViewTrackingComponent } from './view-tracking/view-tracking.component';


@NgModule({
  declarations: [
    AddTrackingComponent,
    EditTrackingComponent,
    ViewTrackingComponent
  ],
  imports: [
    CommonModule,
    TrackingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    MaterialModule,
  ]
})
export class TrackingModule { }
