import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  @Input() data: any;
  @Input() back: string;
  @Input() infoName: string;
  keys: Array<string>;
  values: Array<string>;

  constructor() {
    
  }

  ngOnInit(): void {
    // this.keys = Object.keys(this.data); //.map(item => this.camelToTitleCase(item));
    // this.values = Object.values(this.data);
  }

  ngOnChanges() {
    this.keys = Object.keys(this.data).map(item => this.camelToTitleCase(item));
    this.values = Object.values(this.data);
  }

  camelToTitleCase(text: string): string {
    if (text) {
      const result = text.replace(/([A-Z])/g, " $1");
      const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
      return finalResult;
    }
    return text;
    
  }

}
    // const id = this.route.snapshot.params['id'];
    // this.batchService.getBatchById(id).subscribe((data: Batch) => {
    //   this.batchData = [
    //     ["Name", data.name],
    //     ["Trainer", data.trainerCourse.trainerName],
    //     ["Fee", `${data.fee} /-`],
    //     ["Duration", `${data.duration} hrs`],
    //     ["Start Date", data.startDate.substring(0, 10)],
    //     ["End Date", data.endDate.substring(0, 10)],
    //     ["Start Time", data.startTime],
    //     ["End Time", data.endTime]
    //   ];
    // });