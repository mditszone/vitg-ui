import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tab } from '@mui/material';
import { Batch, BatchTableInfo } from 'src/app/shared/model/batch';
import { TableData } from 'src/app/shared/model/table.data';
import { BatchService } from 'src/app/shared/services/batch.service';
import { TableDataService } from 'src/app/shared/services/table.data.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.scss']
})

export class BatchListComponent implements OnInit {

  // batchdata: Batch[] = [];
  // id: any;
  loggedInUserRole: string = "";
  tableData: TableData = new TableData();

  constructor(private batchService: BatchService, public route: ActivatedRoute, private tableDataService: TableDataService) {
    this.tableData.headers = ["ID", "BATCH NAME", "START DATE", "END DATE", "TRAINER", "ACTIONS"];
    this.tableData.nameOfTable = "Batch List";
    this.tableData.buttonRoute = "/addBatch";
    this.tableData.buttonName = "Create Batch";
  }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.batchService.getAllBatchesTableInfo().subscribe(data => {
      data.forEach(item => {
        const actions = [
          { icon: "visibility", route: '/viewbatch/', routeArgs: item.id },
          { icon: "edit", route: '/editbatch/', routeArgs: item.id }
        ];
        const obj = {
          id: item.id,
          name: item.name,
          startDate: item.startDate,
          endDate: item.endDate,
          actions: actions
        }
        this.tableData.createtData(obj);
      });
      this.tableDataService.setTableData(this.tableData);
    });
  }
}
