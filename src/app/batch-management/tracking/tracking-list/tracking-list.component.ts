import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/shared/model/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.scss']
})
export class TrackingListComponent implements OnInit {

  trackdata: Track[] = [];
  
  id: any;
  loggedInUserRole: string = "";
  constructor(
    private trackService: TrackService, public route: ActivatedRoute) { }


  ngOnInit(): void {
    
    this.trackService.getAllTracks().subscribe(data => {
      console.log(data)
      this.trackdata = data;
    });
  }
  
}
