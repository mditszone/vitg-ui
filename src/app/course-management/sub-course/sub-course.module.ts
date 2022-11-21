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


@NgModule({
  declarations: [
    AddSubCourseComponent,
    ViewSubCourseComponent,
    EditSubCourseComponent
  ],
  imports: [
    CommonModule,
    SubCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
    CKEditorModule
  ]
})
export class SubCourseModule { }
