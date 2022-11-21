import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { AddsliderComponent } from './addslider/addslider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewSliderComponent } from './view-slider/view-slider.component';
import { EditSliderComponent } from './edit-slider/edit-slider.component';


@NgModule({
  declarations: [
    AddsliderComponent,
    ViewSliderComponent,
    EditSliderComponent
    
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SliderModule { }
