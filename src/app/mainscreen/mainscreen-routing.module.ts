import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCountryComponent } from '../login/login-country/login-country.component';
import { LoginWCountryComponent } from '../login/login-w-country/login-w-country.component';
import { AllcoursesTabsComponent } from '../shared-module/allcourses-tabs/allcourses-tabs.component';
import { BatchViewComponent } from '../shared-module/batch-view/batch-view.component';
import { UpcomingBatchesTableComponent } from '../shared-module/upcoming-batches-table/upcoming-batches-table.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CardImagesComponent } from './component/card-images/card-images.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ImageSliderComponent } from './component/image-slider/image-slider.component';
import { InternshipComponent } from './component/internship/internship.component';
import { MainscreenComponent } from './component/mainscreen/mainscreen.component';
import { OutSourcingComponent } from './component/out-sourcing/out-sourcing.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ProjectDevelopmentComponent } from './component/project-development/project-development.component';
import { ServicesComponent } from './component/services/services.component';
import { AddStudentComponent } from './component/student-dashboard/add-student/add-student.component';
import { StudentRegisterComponent } from './component/student-dashboard/student-register/student-register.component';
import { VerifyFacultyComponent } from './component/student-dashboard/verify-faculty/verify-faculty.component';
import { VerifyStudentComponent } from './component/student-dashboard/verify-student/verify-student.component';
import { TeamComponent } from './component/team/team.component';

const routes: Routes = [
  {
    path: '', component: MainscreenComponent,
    children: [
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
        path: 'training', component: ServicesComponent
      },
      {
        path: 'outSourcing', component: OutSourcingComponent
      },
      {
        path: 'internship', component: InternshipComponent
      },
      {
        path: 'projectDevelopment', component: ProjectDevelopmentComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'team', component: TeamComponent
      },
      {
        path: 'contact', component: ContactUsComponent
      },
      {
        path: 'register', component: StudentRegisterComponent
      },

      {
        path: 'verifyStudent', pathMatch: 'full',
        component: VerifyStudentComponent
      },
      {
        path: 'verifyFaculty', pathMatch: 'full',
        component: VerifyFacultyComponent
      },
      {
        path: 'addStudent', pathMatch: 'full',
        component: AddStudentComponent
      },
      {
        path: 'batch', pathMatch: 'full', component: UpcomingBatchesTableComponent,
        // children: [
        //   {
        //     path: 'view/:id', pathMatch: 'full', component: BatchViewComponent,
        //   },
        // ]
      },
      {
        path: 'batch/view/:id', pathMatch: 'full', component: BatchViewComponent,
      },
      {
        path: 'tabs', pathMatch: 'full', component: AllcoursesTabsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MainscreenRoutingModule { }
