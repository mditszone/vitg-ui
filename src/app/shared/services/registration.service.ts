import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseURL: string = environment?.config?.apiUrl;
  headers: any = { 'content-type': 'application/json' }
  constructor(public httpclient: HttpClient) { }


  public sendOTP(path: string, queryParams: any): Observable<any> {
    return this.httpclient.get(this.baseURL + `${path}${queryParams}`);
  }

  verifyStaffOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/auth/register/vitg/staff/verifyOtp', obj, {
      headers: this.headers
    });
  }
  verifyStudentOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/auth/register/vitg/student/verifyOtp', obj, {
      headers: this.headers
    });
  }
  verifyTrainerOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/auth/register/vitg/trainer/verifyOtp', obj, {
      headers: this.headers
    });
  }
}
