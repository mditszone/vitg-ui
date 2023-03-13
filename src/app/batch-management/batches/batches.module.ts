import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchesRoutingModule } from './batches-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import { ViewBatchComponent } from './view-batch/view-batch.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
// import { Moment } from 'moment';
//import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


@NgModule({
  declarations: [
    AddBatchComponent,
    EditBatchComponent,
    ViewBatchComponent,

  ],
  imports: [

    BatchesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    MaterialModule,
    SharedModuleModule
    //MatMomentDateModule,

    //NgxMatTimepickerModule,

  ]
})
export class BatchesModule { }
