import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Email } from "../model/email";


@Injectable({
    providedIn: 'root'
  })
  
export class EqnuiryService {
    baseURL: string = environment?.config?.apiUrl;
    constructor(private http: HttpClient) {}

    public createEnquiry(enquiry: Object): Observable<Object> {
        return this.http.post(this.baseURL + '/api/enquiry/createEnquiry', enquiry);
    }

    public getAllEnquires(): Observable<Object[]> {
        return this.http.get<Object[]>(this.baseURL + '/api/enquiry/getAllEnquires');
    }

    public getAllEnquiryById(id: number): Observable<Object> {
        return this.http.get<Object>(this.baseURL + '/api/enquiry/getAllEnquiryById/' + id);
    }

    public sendEmail(email: Email): Observable<any> {
        return this.http.post(this.baseURL + '/api/enquiry/sendMail', email);
    }
      
}