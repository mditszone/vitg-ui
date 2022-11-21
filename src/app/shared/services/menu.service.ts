import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseURL:string = environment.config.apiUrl;

  constructor(public http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get(this.baseURL + '/api/menu/menuitems')
  }
 
  
}
