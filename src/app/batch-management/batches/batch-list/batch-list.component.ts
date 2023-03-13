import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tab } from '@mui/material';
import { Batch, BatchTableInfo } from 'src/app/shared/model/batch';
import { TableData } from 'src/app/shared/model/table.data';
import { BatchService } from 'src/app/shared/services/batch.service';

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

  constructor(private batchService: BatchService, public route: ActivatedRoute) { 
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
        let arr = Object.values(item);
        arr.push([{icon: "visibility", route: '/viewbatch/', routeArgs: item.id}, {icon: "edit", route: '/editbatch/', routeArgs: item.id}]);
        this.tableData.rowData.push(arr);
      })    
    });
  }
}


    
    // this.batchService.getAllBatches().subscribe(data => {
    //   sessionStorage.setItem('trainerdata', JSON.stringify(data));
    //   this.batchdata = data;

    //   data.forEach(item => {
    //     let arr: any[] = [];
    //     arr.push(item.id);
    //     arr.push(item.name);
    //     arr.push(item.startDate);
    //     arr.push(item.endDate);
    //     arr.push(item.trainerCourse.trainerName);
    //     arr.push([{icon: "visibility", route: '/viewbatch/', routeArgs: item.id}, {icon: "edit", route: '/editbatch/', routeArgs: item.id}]);
    //     this.tableData.rowData.push(arr);
    //   });
    //   console.log(this.tableData);

    // });