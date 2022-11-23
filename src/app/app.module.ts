import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainscreenModule } from './mainscreen/mainscreen.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatBotModule } from './chat-bot/chat-bot.module';
import { ChatComponent } from './chat-bot/chat/chat.component';
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
import { HeaderComponent } from './component/header/header.component';
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
import { MenuComponent } from './mainscreen/menu/menu.component';
import { MainscreenComponent } from './mainscreen/component/mainscreen/mainscreen.component';
import { SliderListComponent } from './application-management/slider/slider-list/slider-list.component';
import { SliderModule } from './application-management/slider/slider.module';
import { BatchListComponent } from './batch-management/batches/batch-list/batch-list.component';
import { TrackingListComponent } from './batch-management/tracking/tracking-list/tracking-list.component';
import { BatchesModule } from './batch-management/batches/batches.module';
import { TrackingModule } from './batch-management/tracking/tracking.module';
import { DatePipe } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    ChatComponent,
    StaffLoginComponent,
    VerifyStaffLoginComponent,
    StaffListComponent,
    StudentListComponent,
    TrainerListComponent,
    HeaderComponent,
    SidenavComponent,
    CourseListComponent,
    SubCourseListComponent,
    TopicListComponent,
    SubTopicListComponent,
    BatchListComponent,
    TrackingListComponent,
    SliderListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgOtpInputModule,
    MainscreenModule,
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
    ChatBotModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    MessagesModule,
    ConfirmDialogModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
