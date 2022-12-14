import { Component, OnInit } from '@angular/core';
import { UpcomingBatches } from 'src/app/shared/model/upcoming-batches';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-upcoming-batches-table',
  templateUrl: './upcoming-batches-table.component.html',
  styleUrls: ['./upcoming-batches-table.component.scss']
})
export class UpcomingBatchesTableComponent implements OnInit {

  upcomingBatchdata: UpcomingBatches[] = [];
  constructor() { }


  ngOnInit(): void {
  }
}

