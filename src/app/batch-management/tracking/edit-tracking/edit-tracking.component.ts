import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'src/app/shared/model/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-edit-tracking',
  templateUrl: './edit-tracking.component.html',
  styleUrls: ['./edit-tracking.component.scss']
})
export class EditTrackingComponent implements OnInit {

  track: Track = new Track();
  trackDetailsForm: any;
  trackdata!: Track;
  data: any;
  id!: number;
  trackForm: any;
  submitted!: boolean;
  events: string[] = [];


  constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public trackService: TrackService,
    public router: Router) { }


    
  ngOnInit(): void {
    this.trackDetailsForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      date: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      topicsCovered: ['',[Validators.required]],
      remarks: ['',[Validators.required]]
    })

    this.patchValue();

  }

  get f() { return this.trackDetailsForm.controls; }

  patchValue() {
    this.id = this.route.snapshot.params['id']
    this.trackService.getTrackById(this.id).subscribe((data: Track) => {
      this.trackdata = data;
    })
    

    this.trackDetailsForm.patchValue({
     name: this.trackdata.date
    })
    
    this.trackDetailsForm.patchValue({
      name: this.trackdata.startTime
    })
    this.trackDetailsForm.patchValue({
      name: this.trackdata.endTime
    })
    this.trackDetailsForm.patchValue({
      name: this.trackdata.topicsCovered
    })
    this.trackDetailsForm.patchValue({
      name: this.trackdata.remarks
    })
  }
  
  updateTrack() {
    this.submitted = true;
    if (this.trackDetailsForm.invalid) {
      return
    }
    else {
      this.trackForm = this.trackDetailsForm.value;
      this.trackdata.id = this.trackForm.id;
     this.trackdata.date = this.trackForm.date;
      this.trackdata.startTime = this.trackForm.startTime;
      this.trackdata.endTime = this.trackForm.endTime;
      this.trackdata.topicsCovered = this.trackForm.topicsCovered;
      this.trackdata.remarks = this.trackForm.remarks;
      this.trackService.updateTrack(this.trackdata).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/tracking'],{skipLocationChange: true})
      })
    }
    
  }
}





