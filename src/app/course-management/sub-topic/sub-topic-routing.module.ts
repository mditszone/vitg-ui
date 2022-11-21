import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddSubTopicComponent } from './add-sub-topic/add-sub-topic.component';
import { EditSubTopicComponent } from './edit-sub-topic/edit-sub-topic.component';
import { ViewSubTopicComponent } from './view-sub-topic/view-sub-topic.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addSubTopic', pathMatch: 'full',
        component: AddSubTopicComponent
      }]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'viewsubtopic/:id',
        component:ViewSubTopicComponent
      }
    ]
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'editsubtopic/:id',
        component:EditSubTopicComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubTopicRoutingModule { }
