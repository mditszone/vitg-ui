import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { FaqData } from "../model/FaqData";



@Injectable({
    providedIn: 'root'
  })
  
export class FaqService {
    baseURL: string = environment?.config?.apiUrl;
    constructor(private http: HttpClient) {}

    public getAllFaqs(): Observable<any> {
        return this.http.get<any>(this.baseURL + "/api/faq/getAllFaqs");
    }

      
}