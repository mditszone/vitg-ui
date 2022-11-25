import { TabComponent } from './component/tab/tab.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { AddSubTopicConceptComponent } from './course-management/sub-topic-concept/add-sub-topic-concept/add-sub-topic-concept.component';
import { CorejavaComponent } from './mainscreen/tab-components/corejava/corejava.component';
import { MainscreenComponent } from './mainscreen/component/mainscreen/mainscreen.component';
import { AddsliderComponent } from './application-management/slider/addslider/addslider.component';
import { SliderListComponent } from './application-management/slider/slider-list/slider-list.component';
import { ImageSliderComponent } from './mainscreen/component/image-slider/image-slider.component';
import { BatchListComponent } from './batch-management/batches/batch-list/batch-list.component';
import { TrackingListComponent } from './batch-management/tracking/tracking-list/tracking-list.component';

const routes: Routes = [

  {
    path:'',component:MainscreenComponent,
    children:[
      {
        path:'',component:ImageSliderComponent
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

  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'dashboard', pathMatch: 'full',
  //       component: DashboardComponent
  //     }]
  // },

  
  {
    path: 'dashboard', 
    component: SidebarComponent
  },

  {
    path: 'sidebar', 
    component: SidebarComponent
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
        }]
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
    ////
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
          path: 'subtopicconcept', pathMatch: 'full',
          component: AddSubTopicConceptComponent
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
          path: 'addSlider', pathMatch: 'full',
          component: AddsliderComponent
        }]
    }
    

    // {
    //   path: 'staff',
    //   component: LayoutComponent,
    //   children: [
    //     // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //     {
    //       path: 'staff',
    //       loadChildren: () => import('./user-management/staff-management/staff-management.module').then(staffmanagement => staffmanagement.StaffManagementModule),
    //     }
  
    //   ]
    // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
