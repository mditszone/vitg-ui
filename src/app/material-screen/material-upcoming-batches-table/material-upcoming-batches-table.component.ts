import { Component, OnInit } from '@angular/core';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-material-upcoming-batches-table',
  templateUrl: './material-upcoming-batches-table.component.html',
  styleUrls: ['./material-upcoming-batches-table.component.scss']
})
export class MaterialUpcomingBatchesTableComponent implements OnInit {

  upcomingBatchdata: Batch[] = [];
  constructor(public batchService: BatchService) { }

  ngOnInit(): void {
    this.batchService.getAllBatches().subscribe(data => {
      this.upcomingBatchdata = data;
    })
  }

}
