import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { EditTrainerComponent } from './edit-trainer/edit-trainer.component';
import { RegisterTrainerComponent } from './register-trainer/register-trainer.component';
import { TrainerCourseComponent } from './trainer-course/trainer-course.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { VerifyTrainerComponent } from './verify-trainer/verify-trainer.component';
import { ViewTrainerComponent } from './view-trainer/view-trainer.component';

const routes: Routes = [

  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'studentTab',
  //       component: StudentTabsComponent,
  //       children: [
  //         {
  //           path: 'access', pathMatch: 'full',
  //           component: StudentSubcourseComponent
  //         }]
  //     },
  //   ]
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'trainerCourse', pathMatch: 'full',
        component: TrainerCourseComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'trainerRegister', pathMatch: 'full',
        component: RegisterTrainerComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'verifyTrainer', pathMatch: 'full',
        component: VerifyTrainerComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addTrainer', pathMatch: 'full',
        component: AddTrainerComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewtrainer/:id', pathMatch: 'full',
        component: ViewTrainerComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'edittrainer/:id', pathMatch: 'full',
        component: EditTrainerComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerManagementRoutingModule { }
