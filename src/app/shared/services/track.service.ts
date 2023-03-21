import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  headers:any
  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) {
    var data = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    let token = data.token
    this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
   }

  public createTrack(track: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/track', track,{headers:this.headers});
  }
  public getAllTracks(): Observable<any> {
    return this.http.get(this.baseURL + '/api/track/AllTracks',{headers:this.headers})
  }
  public getTrackById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/track/${id}`,{headers:this.headers})
  }
  public updateTrack(track: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/track/editTrack', track,{headers:this.headers})
  }
}