import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../component/layout/layout.component';
import { FacebookShareComponent } from './facebook-share/facebook-share.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'fb', pathMatch: 'full',
  //       component: FacebookShareComponent
  //     }]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersManagementRoutingModule { }
