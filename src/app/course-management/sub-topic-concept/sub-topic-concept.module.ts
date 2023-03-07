import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubTopicConceptRoutingModule } from './sub-topic-concept-routing.module';
import { AddSubTopicConceptComponent } from './add-sub-topic-concept/add-sub-topic-concept.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SubtopicConceptTabsComponent } from './subtopic-concept-tabs/subtopic-concept-tabs.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { TrainerPptComponent } from './trainer-ppt/trainer-ppt.component';
import { GithubUrlComponent } from './github-url/github-url.component';
import { OtherUrlsComponent } from './other-urls/other-urls.component';
import { ExamplesComponent } from './examples/examples.component';
import { SubtopicConceptYoutubeUrlComponent } from './subtopic-concept-youtube-url/subtopic-concept-youtube-url.component';
import { EditSubTopicConceptComponent } from './edit-sub-topic-concept/edit-sub-topic-concept.component';
import { SubTopicConceptNameComponent } from './sub-topic-concept-name/sub-topic-concept-name.component';
import { AddTrainerDocsComponent } from './add-trainer-docs/add-trainer-docs.component';
import { AddExamplesComponent } from './add-examples/add-examples.component';


@NgModule({
  declarations: [
    AddSubTopicConceptComponent,
    SubtopicConceptTabsComponent,
    TrainerPptComponent,
    GithubUrlComponent,
    OtherUrlsComponent,
    ExamplesComponent,
    SubtopicConceptYoutubeUrlComponent,
    EditSubTopicConceptComponent,
    SubTopicConceptNameComponent,
    AddTrainerDocsComponent,
    AddExamplesComponent,
  ],
  imports: [
    CommonModule,
    SubTopicConceptRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule
    
  ]
})
export class SubTopicConceptModule { }
