import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'src/app/shared/model/track';
import { BatchService } from 'src/app/shared/services/batch.service';
import { TrackService } from 'src/app/shared/services/track.service';


@Component({
  selector: 'app-add-tracking',
  templateUrl: './add-tracking.component.html',
  styleUrls: ['./add-tracking.component.scss'],
  
})
export class AddTrackingComponent implements OnInit {

  track: Track = new Track();
  trackDetailsForm: any;
  submitted!: boolean;
  batchList: any;
  data: any;
  trackForm: any;
  errorMessage: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private trackService: TrackService,
    private batchService: BatchService) {
  }

  ngOnInit(): void {
    this.trackDetailsForm = this.formBuilder.group({
      batch: ['', [Validators.required]],
      date: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      topicsCovered: ['', [Validators.required]],
      remarks: ['', [Validators.required]]
    }),
      this.getBatchesList();
    this.patchValue();

  }
  getBatchesList() {
    this.batchService.getBatchesList().subscribe((data: any) => {
      console.log(data);
      this.batchList = data;
      (error: any) =>
        this.errorMessage = error;
    });
  }

  get f() { return this.trackDetailsForm.controls; }

  patchValue() {
    this.trackDetailsForm.patchValue({
      batch: this.data.batch,
      date: this.data.date,
      startTime: this.data.startTime,
      endTime: this.data.endTime,
      topicsCovered: this.data.topicsCovered,
      remarks: this.data.remarks
    });
  }

  createTrack() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.trackDetailsForm.invalid) {
      return;
    }
    else {
      this.trackForm = this.trackDetailsForm.value;
      this.track.batch = this.trackForm.batch;
      this.track.date = this.trackForm.date;
      this.track.startTime = this.trackForm.startTime;
      this.track.endTime = this.trackForm.endTime;
      this.track.topicsCovered = this.trackForm.topicsCovered;
      this.track.remarks = this.trackForm.remarks;
      console.log(this.trackForm.batchId)
      console.log(this.track.batchId);

      this.trackService.createTrack(this.track).subscribe(
        (data: any) => {
          console.log(data)
          this.router.navigate(['/tracking']);
        });
    }
  }
}
