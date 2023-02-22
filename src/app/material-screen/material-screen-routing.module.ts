import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchViewComponent } from './batch-view/batch-view.component';
import { MaterialAllcourseTabsComponent } from './material-allcourse-tabs/material-allcourse-tabs.component';
import { MaterialScreenComponent } from './material-screen/material-screen.component';
import { MaterialUpcomingBatchesTableComponent } from './material-upcoming-batches-table/material-upcoming-batches-table.component';

const routes: Routes = [
  {
    path: '', component: MaterialScreenComponent,
    children: [
      {
        path: 'materialAllcoursestabs', component: MaterialAllcourseTabsComponent
      },
      {
        path: 'materialbatchList', component: MaterialUpcomingBatchesTableComponent,
      },
      {
        path: 'materialbatchView/:id', component: BatchViewComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialScreenRoutingModule { }
