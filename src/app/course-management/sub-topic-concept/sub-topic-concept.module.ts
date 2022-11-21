import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTopicConceptRoutingModule } from './sub-topic-concept-routing.module';
import { AddSubTopicConceptComponent } from './add-sub-topic-concept/add-sub-topic-concept.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AddSubTopicConceptComponent
  ],
  imports: [
    CommonModule,
    SubTopicConceptRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
    
  ]
})
export class SubTopicConceptModule { }
