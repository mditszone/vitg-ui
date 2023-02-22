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

  batchData: Object[] = [];

  constructor(private route: ActivatedRoute, private batchService: BatchService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.batchService.getBatchById(id).subscribe((data: Batch) => {
      this.batchData = [
        ["Name", data.name],
        ["Trainer", data.trainerCourse.trainerName],
        ["Fee", `${data.fee} /-`],
        ["Duration", `${data.duration} hrs`],
        ["Start Date", data.startDate.substring(0, 10)],
        ["End Date", data.endDate.substring(0, 10)],
        ["Start Time", data.startTime],
        ["End Time", data.endTime]
      ];
    });
  }
}
