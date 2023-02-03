import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialAllcourseTabsComponent } from './material-allcourse-tabs/material-allcourse-tabs.component';
import { MaterialScreenComponent } from './material-screen/material-screen.component';

const routes: Routes = [
  {
    path:'',component:MaterialScreenComponent,children:[{
      path:'materialAllcoursestabs',component:MaterialAllcourseTabsComponent
    }]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialScreenRoutingModule { }
