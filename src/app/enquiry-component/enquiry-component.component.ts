import { Component, OnInit } from '@angular/core';
import { EqnuiryService } from '../shared/services/enquiry.service';

@Component({
  selector: 'app-enquiry-component',
  templateUrl: './enquiry-component.component.html',
  styleUrls: ['./enquiry-component.component.scss']
})
export class EnquiryComponentComponent implements OnInit {

  enquires: Object[] = [];
  constructor(private enquiryService: EqnuiryService) { 
      this.enquiryService.getAllEnquires().subscribe(data => {
        console.log(data);
        this.enquires = data;
      });
   }

  ngOnInit(): void {
  }

  getLink(enqury: Object): string {
    return JSON.stringify(enqury);
  }
}
