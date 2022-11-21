import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddSubCourseComponent } from './add-sub-course/add-sub-course.component';
import { EditSubCourseComponent } from './edit-sub-course/edit-sub-course.component';
import { ViewSubCourseComponent } from './view-sub-course/view-sub-course.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addSubCourse', pathMatch: 'full',
        component: AddSubCourseComponent
      }]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'viewsubcourse/:id',
        component:ViewSubCourseComponent
      }
    ]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'editsubcourse/:id',
        component:EditSubCourseComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCourseRoutingModule { }
