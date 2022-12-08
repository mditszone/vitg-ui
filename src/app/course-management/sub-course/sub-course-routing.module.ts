import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddSubCourseComponent } from './add-sub-course/add-sub-course.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { DurationDaysComponent } from './duration-days/duration-days.component';
import { DurationHoursComponent } from './duration-hours/duration-hours.component';
import { EditSubCourseComponent } from './edit-sub-course/edit-sub-course.component';
import { ExamCertificationComponent } from './exam-certification/exam-certification.component';
import { FeeComponent } from './fee/fee.component';
import { OverviewComponent } from './overview/overview.component';
import { SubcourseTabsComponent } from './subcourse-tabs/subcourse-tabs.component';
import { TrainingModeComponent } from './training-mode/training-mode.component';
import { ViewSubCourseComponent } from './view-sub-course/view-sub-course.component';
import { YoutubeUrlComponent } from './youtube-url/youtube-url.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'subCourseTab', pathMatch: 'full',
  //       component: SubcourseTabsComponent
  //     }]
  // },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'addSubCourse', pathMatch: 'full',
            component: AddSubCourseComponent
          }]
      },
    ]
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'overview', pathMatch: 'full',
            component: OverviewComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'curriculum', pathMatch: 'full',
            component: CurriculumComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'durationDays', pathMatch: 'full',
            component: DurationDaysComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'durationHours', pathMatch: 'full',
            component: DurationHoursComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'fee', pathMatch: 'full',
            component: FeeComponent
          }]
      },
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'examCertification', pathMatch: 'full',
            component: ExamCertificationComponent
          }]
      },
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'trainingMode', pathMatch: 'full',
            component: TrainingModeComponent
          }]
      },
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'youtubeUrl', pathMatch: 'full',
            component: YoutubeUrlComponent
          }]
      },
    ]
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewsubcourse/:id',
        component: ViewSubCourseComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subCourseTab',
        component: SubcourseTabsComponent,
        children: [
          {
            path: 'editsubcourse/:id', pathMatch: 'full',
            component: EditSubCourseComponent
          }]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCourseRoutingModule { }
