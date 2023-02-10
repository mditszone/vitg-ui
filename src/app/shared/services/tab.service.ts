import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Subcourse } from '../model/subcourse';


@Injectable({
  providedIn: 'root'
})
export class TabService {
  constructor() { }

  //public tabGeneratedData = new BehaviorSubject<string>('');
  //private tabGeneratedData = new Subject<any>();

  private tabGeneratedData: BehaviorSubject<any> = new BehaviorSubject<any>('');
  method: Observable<any> = this.tabGeneratedData.asObservable();

  myMethod(data) {
    //let's return this data to another components
    this.tabGeneratedData.next(data);
    sessionStorage.setItem('tabServiceData', JSON.stringify(data)||'{}');
  }
}
