import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicListComponent } from './topic-list/topic-list.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { ViewTopicComponent } from './view-topic/view-topic.component';
import { EditTopicComponent } from './edit-topic/edit-topic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AddTopicComponent,
    ViewTopicComponent,
    EditTopicComponent
  ],
  imports: [
    CommonModule,
    TopicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule

  ]
})
export class TopicModule { }
