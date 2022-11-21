import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) { }

  public createTrack(track: any): Observable<any> {
    return this.http.post(this.baseURL + '/api/track', track);
  }
  public getAllTracks(): Observable<any> {
    return this.http.get(this.baseURL + '/api/track/AllTracks')
  }
  public getTrackById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/track/${id}`)
  }
  public updateTrack(track: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/track/editTrack', track)
  }
  
}
