import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent, navItems } from './component/layout/layout.component';
import { MainscreenModule } from './mainscreen/mainscreen.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnquiryComponentComponent } from './enquiry-component/enquiry-component.component';
import { EnquiryReplyComponent } from './enquiry-reply/enquiry-reply.component';
import { AddRemarksComponent } from './add-remarks/add-remarks.component';
import { BatchRegisterComponent } from './batch-management/batch-register/batch-register.component';
import { SupportTeamModule } from './support-team/support-team.module';
import { ChatBotLinksComponent } from './application-management/chat-bot-links/chat-bot-links.component';
import { PushNotificationsService } from 'ng-push';
import { ActiveUserChatService } from './shared/services/active.user.chat.service';
import { AddFaqComponent } from './application-management/add-faq/add-faq.component';
import { EditFaqComponent } from './application-management/edit-faq/edit-faq.component';
import { FaqsComponent } from './application-management/faqs/faqs.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth.guard.service';
import { AuthService } from './shared/services/auth.service';
import { FacultyListComponent } from './user-management/faculty/faculty-list/faculty-list.component';
import { FacultyModule } from './user-management/faculty/faculty.module';


@NgModule({
  declarations: [
    AppComponent,
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
    LayoutComponent,
    ChatBotLinksComponent,
    AddFaqComponent,
    EditFaqComponent,
    FacultyListComponent

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
    MatDatepickerModule, 
    MatMomentDateModule, 
    DropdownModule,
    SupportTeamModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule, 
    BrowserModule, 
    FormsModule, 
    TableModule,
    SharedModuleModule,
    FacultyModule,
    //RouterModule.forRoot(navItems ,{ useHash: true }),

  ],
  providers: [
    { provide: DatePipe },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    PushNotificationsService,
    ActiveUserChatService, AuthGuardService, AuthService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
