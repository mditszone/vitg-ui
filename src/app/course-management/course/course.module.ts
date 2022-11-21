import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewCourseComponent } from './view-course/view-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    
    AddCourseComponent,
    ViewCourseComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
  ]
})
export class CourseModule { }
