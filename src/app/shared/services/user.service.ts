import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = environment?.config?.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getAllStaff(): Observable<any> {
    return this.http.get(this.baseURL + '/api/staff/getAllStaff');
  }
  public updateStaffinfo(id:any, body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/staff/editStaff',body);
  }
  
  public getStaffById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/staff/${id}`)
  }
  public getStaffRoles(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getStaffRoles');
  }
///////////////////////

  public getAllTrainers(): Observable<any> {
    return this.http.get(this.baseURL + '/api/trainer/getAllTrainers');
  }
  public updateTrainerinfo(id:any, body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/trainer/editTrainer',body);
  }
  
  public getTrainerById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/trainer/${id}`)
  }

//////////////////

  public getAllStudents(): Observable<any> {
    return this.http.get(this.baseURL + '/api/student/getAllStudents');
  }

  public updateStudentinfo(id:any, body: any): Observable<any> {
    return this.http.put(this.baseURL +'/api/student/editStudent',body);
  }
  
  public getStudentById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/student/${id}`)
  }
  
}
