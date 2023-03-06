import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './user-management/staff-management/staff-list/staff-list.component';
import { StudentListComponent } from './user-management/student-management/student-list/student-list.component';
import { TrainerListComponent } from './user-management/trainer-management/trainer-list/trainer-list.component';
import { LayoutComponent } from './component/layout/layout.component';
import { VerifyStaffLoginComponent } from './login/verify-staff-login/verify-staff-login.component';
import { StaffLoginComponent } from './login/staff-login/staff-login.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { CourseListComponent } from './course-management/course/course-list/course-list.component';
import { SubCourseListComponent } from './course-management/sub-course/sub-course-list/sub-course-list.component';
import { TopicListComponent } from './course-management/topic/topic-list/topic-list.component';
import { SubTopicListComponent } from './course-management/sub-topic/sub-topic-list/sub-topic-list.component';
import { MainscreenComponent } from './mainscreen/component/mainscreen/mainscreen.component';
import { AddsliderComponent } from './application-management/slider/addslider/addslider.component';
import { SliderListComponent } from './application-management/slider/slider-list/slider-list.component';
import { ImageSliderComponent } from './mainscreen/component/image-slider/image-slider.component';
import { BatchListComponent } from './batch-management/batches/batch-list/batch-list.component';
import { TrackingListComponent } from './batch-management/tracking/tracking-list/tracking-list.component';
import { AllcoursesTabsComponent } from './mainscreen/component/allcourses-tabs/allcourses-tabs.component';
import { SubtopicConceptTabsComponent } from './course-management/sub-topic-concept/subtopic-concept-tabs/subtopic-concept-tabs.component';
import { MaterialScreenComponent } from './material-screen/material-screen/material-screen.component';
import { MaterialSidebarComponent } from './mainscreen/component/material-sidebar/material-sidebar.component';

import { SubTopicConceptListComponent } from './course-management/sub-topic-concept/sub-topic-concept-list/sub-topic-concept-list.component';

import { SendInvitationComponent } from './batch-management/send-invitation/send-invitation.component';
import { SendSmsComponent } from './batch-management/send-sms/send-sms.component';
import { EnquiryComponentComponent } from './enquiry-component/enquiry-component.component';
import { EnquiryReplyComponent } from './enquiry-reply/enquiry-reply.component';
import { BatchRegisterComponent } from './batch-management/batch-register/batch-register.component';
import { FaqsComponent } from './application-management/faqs/faqs.component';
import { EditFaqComponent } from './application-management/edit-faq/edit-faq.component';
import { AddFaqComponent } from './application-management/add-faq/add-faq.component';


const routes: Routes = [
  {
    path: '', component: MainscreenComponent,
    children: [
      {
        path: '',
        component: ImageSliderComponent,
      }
    ]
  },
  {
    path: '', component: MainscreenComponent,
    children: [
      {
        path: 'tabComponent', component: AllcoursesTabsComponent
      }
    ]
  },
  {
    path: '', component: MaterialScreenComponent,
    children: [
      {
        path: 'materialSidebar', component: MaterialSidebarComponent
      }
    ]
  },
  {
    path: '',
    component: MainscreenComponent,
    children: [{
      path: '',
      loadChildren: () =>
        import('./mainscreen/mainscreen.module').then((mainscreen) => mainscreen.MainscreenModule),
    }]
  },


  {
    path: 'dashboard',
    component: SidebarComponent
  },
  {
    path: 'materialScreen', component: MaterialScreenComponent
  },
  {
    path: 'staffLogin',
    component: StaffLoginComponent
  },
  {
    path: 'verifyStaffLogin',
    component: VerifyStaffLoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'course', pathMatch: 'full',
        component: CourseListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subcourse', pathMatch: 'full',
        component: SubCourseListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'topic', pathMatch: 'full',
        component: TopicListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopic', pathMatch: 'full',
        component: SubTopicListComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subTopicConcept', pathMatch: 'full',
        component: SubTopicConceptListComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'batches', pathMatch: 'full',
        component: BatchListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tracking', pathMatch: 'full',
        component: TrackingListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sendInvitation', pathMatch: 'full',
        component: SendInvitationComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'registerStudent', pathMatch: 'full',
        component: BatchRegisterComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'sendSms', pathMatch: 'full',
        component: SendSmsComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'enquaries', pathMatch: 'full',
        component: EnquiryComponentComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'enquiryReply/:id', pathMatch: 'full',
        component: EnquiryReplyComponent
      }]
  },
  //
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'staff', pathMatch: 'full',
        component: StaffListComponent
      }]
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'student', pathMatch: 'full',
        component: StudentListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'trainer', pathMatch: 'full',
        component: TrainerListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab', pathMatch: 'full',
        component: SubtopicConceptTabsComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'slider', pathMatch: 'full',
        component: SliderListComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'faqs', pathMatch: 'full',
        component: FaqsComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addfaqs', pathMatch: 'full',
        component: AddFaqComponent
      }]
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'chat', pathMatch: 'full',
  //       component: ChatWindowComponent
  //     }]
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addSlider', pathMatch: 'full',
        component: AddsliderComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
