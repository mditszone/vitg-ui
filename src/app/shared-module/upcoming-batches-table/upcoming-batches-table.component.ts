import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/app/shared/model/batch';
import { UpcomingBatches } from 'src/app/shared/model/upcoming-batches';
import { BatchService } from 'src/app/shared/services/batch.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-upcoming-batches-table',
  templateUrl: './upcoming-batches-table.component.html',
  styleUrls: ['./upcoming-batches-table.component.scss']
})
export class UpcomingBatchesTableComponent implements OnInit {

  upcomingBatchdata: Batch[] = [];
  batchViewRoute: string;
  isLoggedIn: boolean = sessionStorage.getItem("student_dto") == null ? false : true;
  constructor(public batchService: BatchService) { }

  ngOnInit(): void {
    this.batchViewRoute = this.isLoggedIn ? '/material/batch/view' : '/batch/view'
    this.batchService.getAllBatches().subscribe(data => {
      this.upcomingBatchdata = data;
    })
  }
}

