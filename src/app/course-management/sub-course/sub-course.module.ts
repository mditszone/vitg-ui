import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCourseRoutingModule } from './sub-course-routing.module';
import { AddSubCourseComponent } from './add-sub-course/add-sub-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewSubCourseComponent } from './view-sub-course/view-sub-course.component';
import { EditSubCourseComponent } from './edit-sub-course/edit-sub-course.component';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SubcourseTabsComponent } from './subcourse-tabs/subcourse-tabs.component';
import { OverviewComponent } from './overview/overview.component';
import { FeeComponent } from './fee/fee.component';
import { YoutubeUrlComponent } from './youtube-url/youtube-url.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { MaterialModule } from 'src/app/shared/module/material.module';
import { DurationDaysComponent } from './duration-days/duration-days.component';
import { DurationHoursComponent } from './duration-hours/duration-hours.component';
import { TrainingModeComponent } from './training-mode/training-mode.component';
import { ExamCertificationComponent } from './exam-certification/exam-certification.component';


@NgModule({
  declarations: [
    AddSubCourseComponent,
    ViewSubCourseComponent,
    EditSubCourseComponent,
    SubcourseTabsComponent,
    OverviewComponent,
    FeeComponent,
    YoutubeUrlComponent,
    CurriculumComponent,
    DurationDaysComponent,
    DurationHoursComponent,
    TrainingModeComponent,
    ExamCertificationComponent,

  ],
  imports: [
    CommonModule,
    SubCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
    CKEditorModule,
    MaterialModule
  ]
})
export class SubCourseModule { }
