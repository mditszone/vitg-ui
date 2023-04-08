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
import { AllcoursesTabsComponent } from './allcourses-tabs/allcourses-tabs.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { BatchViewComponent } from './batch-view/batch-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './dynamic_menu/menu.component';
import { UpcomingBatchesTableComponent } from './upcoming-batches-table/upcoming-batches-table.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CustomizedTooltipComponent } from './customized-tooltip/customized-tooltip.component';

@NgModule({
  declarations: [
    FaqsComponent,
    ChatComponent,
    TableViewComponent,
    DataViewComponent,
    AllcoursesTabsComponent,
    DialogDemoComponent,
    MenuComponent,
    BatchViewComponent,
    HeaderComponent,
    FooterComponent,
    UpcomingBatchesTableComponent,
    CustomizedTooltipComponent
  ],
  exports: [
    FaqsComponent,
    ChatComponent,
    TableViewComponent,
    DataViewComponent,
    AllcoursesTabsComponent,
    MenuComponent,
    BatchViewComponent,
    HeaderComponent,
    FooterComponent,
    CustomizedTooltipComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule,
    FormsModule,
    TableModule,
    RouterModule,
    TableModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    
  ]
})
export class SharedModuleModule { }