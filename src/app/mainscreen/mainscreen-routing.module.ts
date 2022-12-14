import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CardImagesComponent } from './component/card-images/card-images.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ServicesComponent } from './component/services/services.component';
import { AddStudentComponent } from './component/student-dashboard/add-student/add-student.component';
import { StudentRegisterComponent } from './component/student-dashboard/student-register/student-register.component';
import { VerifyStudentComponent } from './component/student-dashboard/verify-student/verify-student.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TeamComponent } from './component/team/team.component';

const routes: Routes = [

  {
    path:'tabComponent/:id',component:TabsComponent
  },
  {
    path: '', component: ImageSliderComponent
  },

  {
    path: 'aboutus', component: AboutUsComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'team', component: TeamComponent
  },
  {
    path: 'contactus', component: ContactUsComponent
  },
  {
    path: 'register', component: StudentRegisterComponent
  },
  {
    path: 'verifyStudent', pathMatch: 'full',
    component: VerifyStudentComponent
  },
  {
    path: 'addStudent', pathMatch: 'full',
    component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainscreenRoutingModule { }
