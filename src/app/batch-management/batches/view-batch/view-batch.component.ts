import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-view-batch',
  templateUrl: './view-batch.component.html',
  styleUrls: ['./view-batch.component.scss']
})
export class ViewBatchComponent implements OnInit {

  batchdata!:any;
  id!:number;
  constructor(private route: ActivatedRoute, private batchService: BatchService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.batchService.getBatchById(this.id).subscribe((data: Batch) => {
      this.batchdata = data
    })

  }
}
