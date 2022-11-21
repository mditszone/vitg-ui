import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/shared/model/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-view-tracking',
  templateUrl: './view-tracking.component.html',
  styleUrls: ['./view-tracking.component.scss']
})
export class ViewTrackingComponent implements OnInit {

  trackdata!:any;
  id!:number;
  constructor(private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trackService.getTrackById(this.id).subscribe((data: Track) => {
      this.trackdata = data
    })

  }
}
