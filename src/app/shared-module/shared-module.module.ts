import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from '../application-management/faqs/faqs.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from '../mainscreen/component/chat/chat.component';
import { MatIconModule } from '@angular/material/icon';
import { TableViewComponent } from './table-view/table-view.component';
import { DataViewComponent } from './data-view/data-view.component';


@NgModule({
  declarations: [
    FaqsComponent,
    ChatComponent,
    TableViewComponent,
    DataViewComponent,
  ],
  exports: [
    FaqsComponent,
    ChatComponent,
    TableViewComponent,
    DataViewComponent,
  ],
  imports: [
    CommonModule, FormsModule, TableModule, RouterModule, TableModule, MatIconModule
  ]
})
export class SharedModuleModule { }
