import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/component/layout/layout.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

const routes: Routes = [
  {
    path: 'support/chat',
    component: LayoutComponent,
    children: [
      {
        path: 'chat', pathMatch: 'full',
        component: ChatWindowComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatWindowRoutingModule { }
