import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-batch-view',
  templateUrl: './batch-view.component.html',
  styleUrls: ['./batch-view.component.scss']
})
export class BatchViewComponent implements OnInit {
  batchData: Object[] = [];
  isLoggedIn: boolean = sessionStorage.getItem("student_send_otp_response") == null ? false : true;
  constructor(private routes: ActivatedRoute, private batchService: BatchService, private router: Router) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.batchService.getBatchById(id).subscribe((data: Batch) => {
        this.batchData = [
          ["ID", data.id],
          ["Name", data.name],
          ["Trainer", data.trainerCourse.trainerName],
          ["Start Date", data.startDate],
          ["End Date", data.endDate],
          ["Start Time", data.startTime],
          ["End Time", data.endTime]
        ];
      });
    })
    
  }

  batchRegister() {
    this.router.navigate(["/register"]);
  }

}
