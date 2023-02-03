import { Subcourse } from './../model/subcourse';
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
  public getSubCourseById(id: number): Observable<Subcourse> {
    return this.http.get<Subcourse>(this.baseURL + `/api/subCourse/${id}`)
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

  public getStudentIdBySubCourseId(studentId: number,subCourseId:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/studentSubCourse/by_subCourse_id_and_student_id?studentId=${studentId}&subCourseId=${subCourseId}`)
  }

  public getTrainerListByCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/trainerCourse/getTrainerListByCourseId/?courseId=${id}`)
  }
  
  // public getTrainerList(courseId:number): Observable<any> {
  //   return this.http.get(this.baseURL + `/api/trainerCourse/getTrainerListByCourseId/?courseId=${courseId}`)
  // }

  // public getCourseListById(id: number): Observable<any> {
  //   return this.http.get(this.baseURL + `/api/trainerCourse/getCourseListById`)
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
    return this.http.get(this.baseURL + `/api/topic/getTopicListBySubCourseId/?subCourseId=${id}`)
  }
  public getTopicListByStudentId(studentId: number,subCourseId:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicListByStudentId?studentId=${studentId}&subCourseId=${subCourseId}`)
  }
  
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

  public getSubTopicListByTopicId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopic/getsubTopicListByTopicId/?topicId=${id}`)
  }


  ////////////////////////////

  public createSubTopicConcept(subTopicConcept: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subTopicConcept', subTopicConcept);
  }
  public getSubTopicConceptById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopicConcept/${id}`)
  }

  public getsubTopicConceptListBySubTopicId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopicConcept/getSubTopicConceptBySubTopicId/?subTopicId=${id}`)
  }


  public updateSubTopicConceptInfo(body: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subTopicConcept/editSubTopicConcept', body)
  }

  public pushFileToStorage(body: any): Observable<any> {
    const formdata: FormData = new FormData();
    formdata.append('file', body);
    return this.http.post(this.baseURL + '/api/fileUpload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
  }

  // public pushFileToStorage(body: any): Observable<any> {
  //   const formdata: FormData = new FormData();
  //   formdata.append('file', body);
  //   return this.http.post('http://localhost:8081/file/upload', formdata,{
  //     reportProgress: true,
  //     responseType: 'text'
  //   });
  // }
}
