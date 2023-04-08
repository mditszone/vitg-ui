import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from '../model/staff';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers:any
  baseURL: string = environment?.config?.apiUrl;
  
  constructor(private http: HttpClient) { 
    var data = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    let token = data.token
    this.headers = new HttpHeaders()
      .set("Authorization", "Bearer " + token);
  }

  public getAllStaff(): Observable<any> {
    return this.http.get(this.baseURL + '/api/staff/getAllStaff',{ headers: this.headers });
  }
  public updateStaffinfo( body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/staff/editStaff',body,{ headers: this.headers });
  }
  
  public getStaffById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/staff/${id}`,{ headers: this.headers })
  }
  public getStaffRoles(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getStaffRoles',{ headers: this.headers });
  }
  public deleteStaffById(id:number):Observable<any>{
    return this.http.delete(this.baseURL + `/api/staff/${id}`,{ headers: this.headers })
  }
  
///////////////////////

  public getAllTrainers(): Observable<any> {
    return this.http.get(this.baseURL + '/api/trainer/getAllTrainers',{ headers: this.headers });
  }

  public updateTrainerinfo(body:any): Observable<any> {
    return this.http.put(this.baseURL +'/api/trainer/editTrainer',body,{ headers: this.headers });
  }
  
  public getTrainerById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/trainer/${id}`,{ headers: this.headers })
  }

  
  public getCoursesList(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getCoursesList',{ headers: this.headers })
  }


//////////////////

  public getAllStudents(): Observable<any> {
    return this.http.get(this.baseURL + '/api/student/getAllStudents',{ headers: this.headers });
  }

  public updateStudentinfo( body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/student/editStudent',body);
  }
  public updateStudentSubCourse( body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/studentSubCourse/update_selected_subCourses',body,{ headers: this.headers });
  }
  public createTrainerCourse( body: any): Observable<any> {
    return this.http.post(this.baseURL +'/api/trainerCourse/selectTrainerCourses',body,{ headers: this.headers });
  }
  
  public getStudentById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/student/${id}`,{ headers: this.headers })
  }


  /// organizers

public getAllOrganizers(): Observable<Staff[]> {
  console.log("organizers");
  return this.http.get<Staff[]>(this.baseURL + '/api/staff/getAllOrganizers');

  // /api/staff/getAllOrganizers
}
public addFaculty(body: any): Observable<any> {
  return this.http.post(this.baseURL + '/api/faculty/addFaculty', body, {headers:this.headers})
}
public getAllFaculty(): Observable<any> {
  return this.http.get(this.baseURL + '/api/faculty/getAllFaculty', {headers:this.headers} )
}
public getFacultyById(id: number): Observable<any> {
  return this.http.get(this.baseURL + `/api/faculty/${id}`, {headers:this.headers} )
}
public updateFacultyinfo(body: any): Observable<any> {
  return this.http.put(this.baseURL + '/api/faculty/editFaculty', body, {headers:this.headers} )
}
public facultyLogin(body: any): Observable<any> {
  return this.http.put(this.baseURL + `/api/faculty/facultyLogin/`, body)
}
public verifyFacultyLogin(body: any): Observable<any> {
  return this.http.post(this.baseURL + `/api/faculty/facultyLogin/verifyOtp`, body)
}
public updateFacultySubCourse(body: any): Observable<any> {
  return this.http.put(this.baseURL + '/api/facultySubCourse/update_selected_subCourses', body,{headers:this.headers});
}
  
}



