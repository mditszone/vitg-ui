import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTopicRoutingModule } from './sub-topic-routing.module';
import { AddSubTopicComponent } from './add-sub-topic/add-sub-topic.component';
import { EditSubTopicComponent } from './edit-sub-topic/edit-sub-topic.component';
import { ViewSubTopicComponent } from './view-sub-topic/view-sub-topic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AddSubTopicComponent,
    EditSubTopicComponent,
    ViewSubTopicComponent
  ],
  imports: [
    CommonModule,
    SubTopicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class SubTopicModule { }
