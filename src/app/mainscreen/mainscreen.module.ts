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
import { MenuComponent } from './component/menu/menu.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { UpcomingBatchesTableComponent } from './component/upcoming-batches-table/upcoming-batches-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllcoursesTabsComponent } from './component/allcourses-tabs/allcourses-tabs.component';
import { MaterialSidebarComponent } from './component/material-sidebar/material-sidebar.component';
import { MaterialLayoutComponent } from './component/material-layout/material-layout.component';
import { DialogDemoComponent } from './component/dialog-demo/dialog-demo.component';
import {NgxMatIntlTelInputComponent} from 'ngx-mat-intl-tel-input';
import { BatchViewComponent } from './component/batch-view/batch-view.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { OutSourcingComponent } from './component/out-sourcing/out-sourcing.component';
import { InternshipComponent } from './component/internship/internship.component';
import { ProjectDevelopmentComponent } from './component/project-development/project-development.component';
import { ChatComponent } from './component/chat/chat.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { SharedModuleModule } from '../shared-module/shared-module.module';

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
    MenuComponent,
    DialogDemoComponent,
    PortfolioComponent,
    MainscreenModule.rootComponent,
    AllcoursesTabsComponent,
    MaterialSidebarComponent,
    MaterialLayoutComponent,
    BatchViewComponent,
    OutSourcingComponent,
    InternshipComponent,
    ProjectDevelopmentComponent,
  ],
  imports: [
    MatIconModule,
    NgxMatIntlTelInputComponent,
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
    FlexLayoutModule,
    NgbCarouselModule,
    CdkAccordionModule,
    SharedModuleModule 
  ],
  exports: [MainscreenModule.rootComponent],
  entryComponents: [MainscreenModule.rootComponent]
})

export class MainscreenModule {
  static rootComponent = UpcomingBatchesTableComponent
 }
