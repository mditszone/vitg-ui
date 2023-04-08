import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    curNode: BehaviorSubject<string> = new BehaviorSubject<string>("");
    showSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    topicData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);;
    constructor(private courseService: CourseService) {}    

    public getAllCourses(): Observable<any> {
        return this.courseService.getAllCourses()
    }

    getNode(node: string): Array<string> {
        return this.dataMap.get(node);
    }

    setCurNode(node: string) {
        this.curNode.next(node);
    }

    setShowSideBar(val: boolean) {
        this.showSideBar.next(val);
    }
    setTopicData(data: any[]) {
        this.topicData.next(data);
    }

}


