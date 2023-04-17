import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcoursesTabsComponent } from '../shared-module/allcourses-tabs/allcourses-tabs.component';
import { BatchViewComponent } from '../shared-module/batch-view/batch-view.component';
import { ProfileComponent } from '../shared-module/profile/profile.component';
import { UpcomingBatchesTableComponent } from '../shared-module/upcoming-batches-table/upcoming-batches-table.component';
import { MaterialScreenComponent } from './material-screen/material-screen.component';
import { StudentMaterialComponent } from './student-material/student-material.component';

const routes: Routes = [
  {
    path: 'material', component: MaterialScreenComponent,
    children: [
      {
        path: 'material', component: StudentMaterialComponent
      },
      {
        path: 'batch', component: UpcomingBatchesTableComponent,
        // children: [
        //   {
        //     path: 'view/:id', pathMatch: 'full', component: BatchViewComponent,
        //   },
        // ]
      },
      {
        path: 'batch/view/:id', pathMatch: 'full', component: BatchViewComponent,
      },
      {
        path: 'tabs', pathMatch: 'full', component: AllcoursesTabsComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialScreenRoutingModule { }
