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
  batchName: string = "";
  batchData: Object[] = [];
  isLoggedIn: boolean = sessionStorage.getItem("student_dto") ? true : false;
  constructor(private routes: ActivatedRoute, private batchService: BatchService, private router: Router) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      console.log(id);
      this.batchService.getBatchById(id).subscribe((data: Batch) => {
        this.batchName = data.name;
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
    })
    
  }

  batchRegister() {
    this.router.navigate(["/register"]);
  }


  pay() {
    
  }

}
