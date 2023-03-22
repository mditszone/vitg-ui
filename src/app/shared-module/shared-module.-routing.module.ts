import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from '../application-management/faqs/faqs.component';
import { LayoutComponent } from '../component/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'faqs', pathMatch: 'full',
            component: FaqsComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }