import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { SharedModuleModule } from "src/app/shared-module/shared-module.module";
import { MaterialModule } from "src/app/shared/module/material.module";
import { AddFacultyComponent } from "./add-faculty/add-faculty.component";
import { FacultyRoutingModule } from "./faculty-routing.moule";
import { EditFacultyComponent } from './edit-faculty/edit-faculty.component';
import { FacultyTabsComponent } from './faculty-tabs/faculty-tabs.component';
import { FacultySubcourseComponent } from './faculty-subcourse/faculty-subcourse.component';
import { NgOtpInputModule } from "ng-otp-input";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';

@NgModule({

    declarations: [
        AddFacultyComponent,
        EditFacultyComponent,
        FacultyTabsComponent,
        FacultySubcourseComponent,
        ViewFacultyComponent,
    ],
    imports: [
        CommonModule,
        FacultyRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgOtpInputModule,
        DropdownModule,
        MaterialModule,
        SharedModuleModule,
        NgMultiSelectDropDownModule.forRoot()
    ]
})
export class FacultyModule { }