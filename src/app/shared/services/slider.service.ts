import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slider } from '../model/slider';


const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class SliderService {


  public baseURL: string = environment.config.apiUrl;

  constructor(public http: HttpClient) { }

  public addSlider(slider: any): Observable<any> {
    return this.http.post(this.baseURL + "/api/slider/upload_image", slider);
  }
  
  public getAllSliders(): Observable<any> {
    return this.http.get<Slider>(this.baseURL + "/api/slider/getAllSlider")
  }
  
  public getSliderById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/slider/${id}`)
  }
  
  public deleteSliderById(id: any): Observable<any> {
    return this.http.delete(this.baseURL + `/api/slider/${id}`)
  }


  getImages() {
    return this.http.get(
      "https://accedo-video-app-api.herokuapp.com/getImages",
      httpOptions
    );
  }
}
