import { Subcourse } from './../model/subcourse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  headers: any
  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) {
    var data = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    let token = data.token
    this.headers = new HttpHeaders()
      .set("Authorization", "Bearer " + token);
  }
  public createCourse(course: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/course', course,{ headers: this.headers });
  }
  public getAllCourses(): Observable<any> {
    return this.http.get(this.baseURL + '/api/course/AllCourses')
  }
  public getCourseById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/course/${id}`,{ headers: this.headers })
  }
  public updateCourse(coursedata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/course/editCourse', coursedata,{ headers: this.headers })
  }
  public deleteCourseById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/course/${id}`,{ headers: this.headers })
  }
  public getCoursesList(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getCoursesList',{ headers: this.headers })
  }

  ///////////////////////////////////

  public createSubCourse(body: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subCourse', body,{ headers: this.headers });
  }
  public getAllSubCourses(): Observable<any> {
    return this.http.get(this.baseURL + '/api/subCourse/AllSubCourses',{ headers: this.headers })
  }
  public getSubCourseById(id: number): Observable<Subcourse> {
    return this.http.get<Subcourse>(this.baseURL + `/api/subCourse/${id}`,{ headers: this.headers })
  }
  public updateSubCourse(subCoursedata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subCourse/editSubCourse', subCoursedata,{ headers: this.headers })
  }
  public deleteSubCourseById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subCourse/${id}`,{ headers: this.headers })
  }
  public getSubCourseListByCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subCourse/getSubCourseByCourseId/?courseId=${id}`,{ headers: this.headers })
  }

  public getStudentIdBySubCourseId(studentId: number, subCourseId: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/studentSubCourse/by_subCourse_id_and_student_id?studentId=${studentId}&subCourseId=${subCourseId}`)
  }

  public getTrainerListByCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/trainerCourse/getTrainerListByCourseId/?courseId=${id}`,{ headers: this.headers })
  }

  // public getTrainerList(courseId:number): Observable<any> {
  //   return this.http.get(this.baseURL + `/api/trainerCourse/getTrainerListByCourseId/?courseId=${courseId}`)
  // }

  // public getCourseListById(id: number): Observable<any> {
  //   return this.http.get(this.baseURL + `/api/trainerCourse/getCourseListById`)
  // }

  /////////////////////////
  public createTopic(topic: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/topic', topic,{ headers: this.headers });
  }
  public getAllTopics(): Observable<any> {
    return this.http.get(this.baseURL + '/api/topic/AllTopics',{ headers: this.headers })
  }
  public getTopicById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/${id}`,{ headers: this.headers })
  }
  public updateTopic(topicdata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/topic/editTopic', topicdata,{ headers: this.headers })
  }
  public deleteTopicById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/topic/${id}`,{ headers: this.headers })
  }

  public getTopicListBySubCourseId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicListBySubCourseId/?subCourseId=${id}`,{ headers: this.headers })
  }
  public getTopicListByStudentId(studentId: number, subCourseId: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicListByStudentId?studentId=${studentId}&subCourseId=${subCourseId}`,{ headers: this.headers })
  }
  public getTopicListByFacultyId(facultyId: number, subCourseId: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicListByFacultyId?studentId=${facultyId}&subCourseId=${subCourseId}`,{ headers: this.headers })
  }

  /////////////////////////////////

  public createSubTopic(subTopic: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subTopic', subTopic,{ headers: this.headers });
  }
  public getAllSubTopics(): Observable<any> {
    return this.http.get(this.baseURL + '/api/subTopic/AllSubTopics',{ headers: this.headers })
  }
  public getSubTopicById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopic/${id}`,{ headers: this.headers })
  }
  public updateSubTopic(subTopicdata: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subTopic/editSubTopic', subTopicdata,{ headers: this.headers })
  }
  public deleteSubTopicById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subTopic/${id}`,{ headers: this.headers })
  }
  public getSubTopicListByTopicId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopic/getsubTopicListByTopicId/?topicId=${id}`,{ headers: this.headers })
  }

  //////////////////

  public getAllSubTopicConcepts(): Observable<any> {
    return this.http.get(this.baseURL + '/api/subTopicConcept/AllSubTopicConcepts',{ headers: this.headers })
  }
  public createSubTopicConcept(subTopicConcept: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/subTopicConcept', subTopicConcept,{ headers: this.headers });
  }
  public getSubTopicConceptById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopicConcept/${id}`,{ headers: this.headers })
  }
  public getsubTopicConceptListBySubTopicId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/subTopicConcept/getSubTopicConceptBySubTopicId/?subTopicId=${id}`,{ headers: this.headers })
  }

  public updateSubTopicConceptInfo(body: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/subTopicConcept/editSubTopicConcept', body,{ headers: this.headers })
  }

  public deleteSUbTopicConceptById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subTopicConcept/${id}`,{ headers: this.headers })
  }

  public pushFileToStorage(files: File[], id: number, fileCategory: string): Observable<Object> {
    const formdata: FormData = new FormData();
    for (const file of files) {
      formdata.append("files", file);
    }
    return this.http.post(this.baseURL + `/api/file/${id}?fileCategory=${fileCategory}`, formdata, {
      reportProgress: true,
      responseType: 'text',
    });
  }
  public getFileListsFromS3(id: number, fileCategory: string): Observable<any> {
    return this.http.get(this.baseURL + `/api/file/getAllFiles/${id}?fileCategory=${fileCategory}`,{ headers: this.headers })
  }

  public getFileFromS3(fileName: any): Observable<any> {
    const httpOptions = {
      //'responseType'  : 'arraybuffer' as 'json'
      'responseType': 'blob' as 'json'
    };
    return this.http.get(this.baseURL + `/api/file/download?fileName=${fileName}`, httpOptions)
  }

  public deleteFileFromS3(fileName: any): Observable<any> {
    return this.http.get(this.baseURL + `/api/file/delete/${fileName}`,{ headers: this.headers })
  }
}