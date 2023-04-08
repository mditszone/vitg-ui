import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BatchTableInfo } from '../model/batch';
import { Email } from '../model/email';
import { Sms } from '../model/sms';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  headers: any
  baseURL: string = environment?.config?.apiUrl
  constructor(public http: HttpClient) { 
    var data = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    let token = data.token
    this.headers = new HttpHeaders()
      .set("Authorization", "Bearer " + token);
  }


  public createBatch(batch: any): Observable<any> {
    // console.log("inside create batch service layer")
    // console.log(batch.startDate);
    // console.log(batch.startTime);
    return this.http.post(this.baseURL + '/api/batch/createBatch', batch, { headers: this.headers });
  }

  public getAllBatches(): Observable<any> {
    return this.http.get(this.baseURL + '/api/batch/AllBatches', { headers: this.headers });
  }

  public getAllBatchesTableInfo(): Observable<BatchTableInfo[]> {
    return this.http.get<BatchTableInfo[]>(this.baseURL + '/api/batch/AllBatchTableInfo', { headers: this.headers });
  }


  public getBatchById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/batch/${id}`)
  }

  public updateBatch(batch: any): Observable<any> {
    return this.http.put(this.baseURL + '/api/batch/editBatch', batch);
  }
  public deleteBatchById(id: number): Observable<any> {
    return this.http.delete(this.baseURL + `/api/batch/${id}`)
  }
  public getBatchesList(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getBatchesList')
  }


  public getBatchListByTrainerId(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/batch/getBatchByTrainerId/?trainerId=${id}`);
  }

  public getOrganizersList(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getOrganizersList')
  }

  public sendSMS(sms: Sms): Observable<any> {
    return this.http.post(this.baseURL + '/api/studentBatch/sendSMSToBatch', sms);
  }

  public sendEmail(email: Email): Observable<any> {
    return this.http.post(this.baseURL + '/api/studentBatch/sendEmailToBatch', email);
  }

}
