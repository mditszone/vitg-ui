import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentSubcourseComponent } from './student-subcourse/student-subcourse.component';
import { StudentTabsComponent } from './student-tabs/student-tabs.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'studentTab',
        component: StudentTabsComponent,
        children: [
          {
            path: 'editstudent/:id', pathMatch: 'full',
            component: EditStudentComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'studentTab',
        component: StudentTabsComponent,
        children: [
          {
            path: 'access', pathMatch: 'full',
            component: StudentSubcourseComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewstudent/:id', pathMatch: 'full',
        component: ViewStudentComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'editstudent/:id', pathMatch: 'full',
        component: EditStudentComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
