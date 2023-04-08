import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableData } from 'src/app/shared/model/table.data';
import { TableDataService } from 'src/app/shared/services/table.data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() tableData: TableData;
  totalRecords: number;
  constructor(private tableDataService: TableDataService) { }
  ngOnInit(): void {
    this.tableDataService.tableDataSubject.subscribe(data => {
      this.tableData = data;
    });
  }

}



