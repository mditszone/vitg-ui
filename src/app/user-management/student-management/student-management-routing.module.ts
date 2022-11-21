import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  
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
