import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TableData } from "../model/table.data";

@Injectable({
    providedIn: 'root'
  })
  export class TableDataService {
    tableData: TableData = new TableData();
    tableDataSubject: BehaviorSubject<TableData>;
    constructor() {
        this.tableDataSubject = new BehaviorSubject<TableData>(new TableData());
    }
    
    setTableData(tableData: TableData) { this.tableDataSubject.next(tableData) }

  }