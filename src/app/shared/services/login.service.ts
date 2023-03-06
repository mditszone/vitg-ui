import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = environment?.config?.apiUrl;
  headers: any = { 'content-type': 'application/json' }
  constructor(public httpclient: HttpClient) { }

  // get store Info
  public sendOTP(path: string, queryParams: any): Observable<any> {
    return this.httpclient.get(this.baseURL + `${path}${queryParams}`);
  }


  // post Create Store
    // post Create Store
    verifyOTP(obj: any): Observable < any > {

      return this.httpclient.post(this.baseURL + '/api/auth/login/verifyOtp', obj, {
        headers: this.headers
      });

    }

}


