import { Component, Input, OnInit } from '@angular/core';
import { TableData } from 'src/app/shared/model/table.data';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() tableData: TableData;
  headers: string[];
  batchData: any;
  constructor() { }
  ngOnInit(): void {}
}



