import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) { }

  public createCourse(course: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/course', course);
  }
  public getAllCourses(): Observable<any> {
    return this.http.get(this.baseURL + '/api/course/AllCourses')
  }
  public getCourseById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/course/${id}`)
  }
  public updateCourse(coursedata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/course/editCourse', coursedata)
  }
  public deleteCourseById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/course/${id}`)
  }
  public getCoursesList(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getCoursesList')
  }
  
  ///////////////////////////////////
  public createSubCourse(body: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subCourse', body);
  }
  public getAllSubCourses(): Observable<any> {
    return this.http.get(this.baseURL + '/api/subCourse/AllSubCourses')
  }
  public getSubCourseById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subCourse/${id}`)
  }

  public updateSubCourse(subCoursedata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subCourse/editSubCourse', subCoursedata)
  }
  public deleteSubCourseById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subCourse/${id}`)
  }
  public getSubCourseListByCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subCourse/getSubCourseByCourseId/?courseId=${id}`)
  }
  // public getSubCoursesList(): Observable<any> {
  //   return this.http.get(this.baseURL + '/api/admin/getSubCoursesList')
  // }

  /////////////////////////
  public createTopic(topic: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/topic', topic);
  }
  public getAllTopics(): Observable<any> {
    return this.http.get(this.baseURL + '/api/topic/AllTopics')
  }
  public getTopicById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/${id}`)
  }
  public updateTopic(topicdata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/topic/editTopic', topicdata)
  }
  public deleteTopicById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/topic/${id}`)
  }
  
  public getTopicListBySubCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicBySubCourseId/?subCourseId=${id}`)
  }
  // public getTopicList(): Observable<any> {
  //   return this.http.get(this.baseURL + '/api/admin/getTopicList')
  // }
  
  /////////////////////////////////

  public createSubTopic(subTopic: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subTopic', subTopic);
  }
  public getAllSubTopics(): Observable<any> {
    return this.http.get(this.baseURL + '/api/subTopic/AllSubTopics')
  }
  public getSubTopicById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopic/${id}`)
  }
  public updateSubTopic(subTopicdata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subTopic/editSubTopic', subTopicdata)
  }
  public deleteSubTopicById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subTopic/${id}`)
  }
  
  public getSubTopicListBySubCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopic/getsubTopicListByTopicId/?topicId=${id}`)
  }
  // public getSubTopicList(): Observable<any> {
  //   return this.http.get(this.baseURL + '/api/admin/getSubTopicList')
  // }

  ////////////////////////////
  public createSubTopicConcept(subTopicConcept: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subTopicConcept', subTopicConcept);
  }

}
