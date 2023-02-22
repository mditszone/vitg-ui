
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainscreenModule } from './mainscreen/mainscreen.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { StaffLoginComponent } from './login/staff-login/staff-login.component';
import { VerifyStaffLoginComponent } from './login/verify-staff-login/verify-staff-login.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ToolbarModule } from 'primeng/toolbar';
import { StaffManagementModule } from './user-management/staff-management/staff-management.module';
import { StaffListComponent } from './user-management/staff-management/staff-list/staff-list.component';
import { StudentListComponent } from './user-management/student-management/student-list/student-list.component';
import { StudentManagementModule } from './user-management/student-management/student-management.module';
import { TrainerListComponent } from './user-management/trainer-management/trainer-list/trainer-list.component';
import { TrainerManagementModule } from './user-management/trainer-management/trainer-management.module';
import { MaterialModule } from './shared/module/material.module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { CourseModule } from './course-management/course/course.module';
import { SubCourseModule } from './course-management/sub-course/sub-course.module';
import { TopicModule } from './course-management/topic/topic.module';
import { CourseListComponent } from './course-management/course/course-list/course-list.component';
import { SubCourseListComponent } from './course-management/sub-course/sub-course-list/sub-course-list.component';
import { TopicListComponent } from './course-management/topic/topic-list/topic-list.component';
import { SubTopicListComponent } from './course-management/sub-topic/sub-topic-list/sub-topic-list.component';
import { SubTopicModule } from './course-management/sub-topic/sub-topic.module';
import { SubTopicConceptModule } from './course-management/sub-topic-concept/sub-topic-concept.module';
import { SliderListComponent } from './application-management/slider/slider-list/slider-list.component';
import { SliderModule } from './application-management/slider/slider.module';
import { BatchListComponent } from './batch-management/batches/batch-list/batch-list.component';
import { TrackingListComponent } from './batch-management/tracking/tracking-list/tracking-list.component';
import { BatchesModule } from './batch-management/batches/batches.module';
import { TrackingModule } from './batch-management/tracking/tracking.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MaterialScreenModule } from './material-screen/material-screen.module';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

import { SubTopicConceptListComponent } from './course-management/sub-topic-concept/sub-topic-concept-list/sub-topic-concept-list.component';

import { SendInvitationComponent } from './batch-management/send-invitation/send-invitation.component';
import { SendSmsComponent } from './batch-management/send-sms/send-sms.component';
import {DropdownModule} from 'primeng/dropdown';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import {NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';
import { EnquiryComponentComponent } from './enquiry-component/enquiry-component.component';
import { EnquiryReplyComponent } from './enquiry-reply/enquiry-reply.component';
import { AddRemarksComponent } from './add-remarks/add-remarks.component';
import { BatchRegisterComponent } from './batch-management/batch-register/batch-register.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LayoutComponent,
    StaffLoginComponent,
    VerifyStaffLoginComponent,
    StaffListComponent,
    StudentListComponent,
    TrainerListComponent,
    SidenavComponent,
    CourseListComponent,
    SubCourseListComponent,
    TopicListComponent,
    SubTopicListComponent,
    SubTopicConceptListComponent,
    BatchListComponent,
    TrackingListComponent,
    SliderListComponent,
    SendInvitationComponent,
    SendSmsComponent,
    EnquiryComponentComponent,
    EnquiryReplyComponent,
    AddRemarksComponent,
    BatchRegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    MainscreenModule,
    MaterialScreenModule,
    MaterialModule,
    StaffManagementModule,
    StudentManagementModule,
    TrainerManagementModule,
    CourseModule,
    SubCourseModule,
    TopicModule,
    SubTopicModule,
    SubTopicConceptModule,
    BatchesModule,
    TrackingModule,
    SliderModule,
    MatTableModule,
    CdkTableModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    MessagesModule,
    ConfirmDialogModule,

    MatDatepickerModule,
    MatMomentDateModule,

    MatDatepickerModule, MatMomentDateModule, DropdownModule,

    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: DatePipe },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
