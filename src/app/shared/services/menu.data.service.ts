import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { Subcourse } from '../model/subcourse';
import { CourseService } from './course.service';

@Injectable({
    providedIn: 'root'
})
export class MenuDataService {
    dataMap = new Map<string, any[]>()
    subCourses: Subcourse[] = [];
    constructor(private courseService: CourseService) {}    

    public getAllCourses(): Observable<any> {
        return this.courseService.getAllCourses()
    }

    getNode(node: string): Array<string> {
        return this.dataMap.get(node);
    }

}


