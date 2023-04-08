import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbShareService {

  accessToken:any
  constructor(private httpclient:HttpClient) { }

  public uploadImagetoFb(url:File,inputValue:any): Observable<any> {
    //let access_token = sessionStorage.getItem('token')
    let access_token = "EAAHZADnCBHz8BAA8FUz75kihCcUGKeD0Bm8gIXApxQ4WUCUv9dTUpPZAh5brKzpV4s8JnoErb3b6FZBqL6Lv75YK4hDMWSmEfyzoRCsQ90Kbt51AzjGvIUOgwpusWK5e5MNAF6UWQCy5THvfhNT5eH0Ele1v9FsI1mZBRV43Qthp3ZA7ZA0V7L"
    
    var formData: any = new FormData();
    formData.append('access_token', access_token);
    formData.append('src', url);
    formData.append('message', inputValue);
    return this.httpclient.post(`https://graph.facebook.com/104483142616321/photos`,formData);
  }
}
