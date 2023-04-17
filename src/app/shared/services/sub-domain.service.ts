import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubDomainService {

  public baseURL: string = environment.config.apiUrl;

  constructor(public http: HttpClient) { }

  public createSubDomain(subDomain:any):Observable<any>{

    let finalSubDomain = `${subDomain}.visionitglobal.com`
    console.log(finalSubDomain)
    return this.http.get(this.baseURL + `/api/route53/create/${finalSubDomain}`)
  }
}
