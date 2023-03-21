import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "src/app/component/layout/layout.component";
import { AddFacultyComponent } from "./add-faculty/add-faculty.component";
import { EditFacultyComponent } from "./edit-faculty/edit-faculty.component";
import { FacultySubcourseComponent } from "./faculty-subcourse/faculty-subcourse.component";
import { FacultyTabsComponent } from "./faculty-tabs/faculty-tabs.component";
import { ViewFacultyComponent } from "./view-faculty/view-faculty.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'addFaculty', component: AddFacultyComponent
            }
        ]
    },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'editfaculty/:id', component: EditFacultyComponent
            }
        ]
    },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'viewfaculty/:id', component: ViewFacultyComponent
            }
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'facultyTab',
                component: FacultyTabsComponent,
                children: [
                    {
                        path: 'facultyAccess', pathMatch: 'full',
                        component: FacultySubcourseComponent
                    }]
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FacultyRoutingModule { }