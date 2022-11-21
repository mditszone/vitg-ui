import { NgModule,CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainscreenRoutingModule } from './mainscreen-routing.module';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ServicesComponent } from './component/services/services.component';
import { PortifolioComponent } from './component/portifolio/portifolio.component';
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
import { MenuComponent } from './menu/menu.component';
import { CorejavaComponent } from './tab-components/corejava/corejava.component';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    TeamComponent,
    StudentRegisterComponent,
    VerifyStudentComponent,
    AddStudentComponent,
    CorejavaComponent,
    MenuComponent,
    MainscreenComponent,
    ImageSliderComponent,
    
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
    NgImageSliderModule
  ]
})
export class MainscreenModule { }
