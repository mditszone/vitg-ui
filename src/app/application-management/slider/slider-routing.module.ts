import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddsliderComponent } from './addslider/addslider.component';
import { EditSliderComponent } from './edit-slider/edit-slider.component';
import { ViewSliderComponent } from './view-slider/view-slider.component';

const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addSlider', pathMatch: 'full',
        component: AddsliderComponent
      }]
  },
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viewslider/:id', pathMatch: 'full',
        component: ViewSliderComponent
      }]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'editslider/:id', pathMatch: 'full',
        component: EditSliderComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
