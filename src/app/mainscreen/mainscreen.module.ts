import { NgModule,CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainscreenRoutingModule } from './mainscreen-routing.module';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ServicesComponent } from './component/services/services.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { TeamComponent } from './component/team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/module/material.module';
import { StudentRegisterComponent } from './component/student-dashboard/student-register/student-register.component';
import { VerifyStudentComponent } from './component/student-dashboard/verify-student/verify-student.component';
import { AddStudentComponent } from './component/student-dashboard/add-student/add-student.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CardImagesComponent } from './component/card-images/card-images.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { MenuComponent } from './component/menu/menu.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { UpcomingBatchesTableComponent } from './component/upcoming-batches-table/upcoming-batches-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DemoComponent } from './component/demo/demo.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    TeamComponent,
    StudentRegisterComponent,
    VerifyStudentComponent,
    AddStudentComponent,
    MainscreenComponent,
    ImageSliderComponent,
    CardImagesComponent,
    TabsComponent,
    MenuComponent,
    PortfolioComponent,
    UpcomingBatchesTableComponent,
    DemoComponent
    
  ],
  imports: [
    CommonModule,
    MainscreenRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgOtpInputModule,
    DropdownModule,
    ToastModule,
    NgImageSliderModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    FlexLayoutModule
    
  ]
})
export class MainscreenModule { }
