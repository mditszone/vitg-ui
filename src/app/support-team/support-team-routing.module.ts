import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../component/layout/layout.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [

  {
    path: 'support',
    component: LayoutComponent,
    children: [
      {
        path: 'notifications', pathMatch: 'full',
        component: NotificationsComponent
      }]
  },
  {
    path: 'support',
    component: LayoutComponent,
    children: [
      {
        path: 'feedback', pathMatch: 'full',
        component: FeedBackComponent
      }]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SupportTeamRoutingModule { }