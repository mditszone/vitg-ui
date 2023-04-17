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

  public getStudentIdBySubCourseId2(studentId: number,subCourseId:number): Observable<any> {
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

  public getTopicListByStudentId2(studentId: number,subCourseId:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicsListByStudentId2?subCourseId=${subCourseId}&studentId=${studentId}`)
  }
  
  public getTopicsListByStudentId(studentId: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicsListByStudentId/${studentId}`)
  }

  public getTopicListByFacultyId2(facultyId: number,subCourseId:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/topic/getTopicsListByFacultyId2?subCourseId=${subCourseId}&facultyId=${facultyId}`)
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

  public getAllSubTopicConcepts():Observable<any>{
    return this.http.get(this.baseURL + '/api/subTopicConcept/AllSubTopicConcepts')
  }

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

  public deleteSUbTopicConceptById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/subTopicConcept/${id}`)
  }

  public pushFileToStorage(files:File[],id:number,fileCategory:string): Observable<Object> {
    const formdata: FormData = new FormData();
    for (const file of files) {
      formdata.append("files", file);
  }
    return this.http.post(this.baseURL + `/api/file/${id}?fileCategory=${fileCategory}`,formdata, {
      reportProgress: true,
      responseType: 'text',
    });
  }
  public getFileListsFromS3(id:number,fileCategory:string):Observable<any>{
    return this.http.get(this.baseURL + `/api/file/getAllFiles/${id}?fileCategory=${fileCategory}`)
  }

  public getFileFromS3(fileName:any):Observable<any>{
    const httpOptions = {
      //'responseType'  : 'arraybuffer' as 'json'
      'responseType'  : 'blob' as 'json'        
    };
    return this.http.get(this.baseURL + `/api/file/download?fileName=${fileName}`,httpOptions)
  }

  public deleteFileFromS3(fileName:any):Observable<any>{
    return this.http.get(this.baseURL + `/api/file/delete/${fileName}`)
  }
}