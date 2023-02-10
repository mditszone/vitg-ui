import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.scss']
})

export class BatchListComponent implements OnInit {

  batchdata: Batch[] = [];
  id: any;
  loggedInUserRole: string = "";

  constructor(private batchService: BatchService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;
    
    this.batchService.getAllBatches().subscribe(data => {
      sessionStorage.setItem('trainerdata', JSON.stringify(data));
      this.batchdata = data;
      console.log(this.batchdata)
    });

    
  }


}