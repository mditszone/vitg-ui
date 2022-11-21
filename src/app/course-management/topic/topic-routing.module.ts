import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { ViewTopicComponent } from './view-topic/view-topic.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addTopic', pathMatch: 'full',
        component: AddTopicComponent
      }]
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'viewtopic/:id',
        component:ViewTopicComponent
      }
    ]
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'edittopic/:id',
        component:EditTopicComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
