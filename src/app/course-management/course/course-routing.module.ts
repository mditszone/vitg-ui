import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addCourse', pathMatch: 'full',
        component: AddCourseComponent
      }]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'viewcourse/:id',
        component:ViewCourseComponent
      }
    ]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'editcourse/:id',
        component:EditCourseComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
