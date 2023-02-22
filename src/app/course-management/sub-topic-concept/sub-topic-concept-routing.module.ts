import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { AddSubTopicConceptComponent } from './add-sub-topic-concept/add-sub-topic-concept.component';
import { EditSubTopicConceptComponent } from './edit-sub-topic-concept/edit-sub-topic-concept.component';
import { ExamplesComponent } from './examples/examples.component';
import { GithubUrlComponent } from './github-url/github-url.component';
import { OtherUrlsComponent } from './other-urls/other-urls.component';
import { SubTopicConceptNameComponent } from './sub-topic-concept-name/sub-topic-concept-name.component';
import { SubtopicConceptTabsComponent } from './subtopic-concept-tabs/subtopic-concept-tabs.component';
import { SubtopicConceptYoutubeUrlComponent } from './subtopic-concept-youtube-url/subtopic-concept-youtube-url.component';
import { TrainerPptComponent } from './trainer-ppt/trainer-ppt.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'addSubTopicConcept', pathMatch: 'full',
        component: AddSubTopicConceptComponent
      }
    ]
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'trainerPpt', pathMatch: 'full',
            component: TrainerPptComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'examples', pathMatch: 'full',
            component: ExamplesComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'subtopicConceptYoutubeUrl', pathMatch: 'full',
            component: SubtopicConceptYoutubeUrlComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'githubUrl', pathMatch: 'full',
            component: GithubUrlComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'otherUrls', pathMatch: 'full',
            component: OtherUrlsComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'editSubTopicConcept/:id', pathMatch: 'full',
            component: EditSubTopicConceptComponent
          }]
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'subtopicConceptTab',
        component: SubtopicConceptTabsComponent,
        children: [
          {
            path: 'subTopicConceptName', pathMatch: 'full',
            component: SubTopicConceptNameComponent
          }]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubTopicConceptRoutingModule { }
