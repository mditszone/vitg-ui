import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddTrackingComponent } from './add-tracking/add-tracking.component';
import { EditTrackingComponent } from './edit-tracking/edit-tracking.component';
import { ViewTrackingComponent } from './view-tracking/view-tracking.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addTracker', pathMatch: 'full',
        component: AddTrackingComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'edittrack/:id',
        component: EditTrackingComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewtrack/:id',
        component: ViewTrackingComponent
      }]
  },
]; 


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
