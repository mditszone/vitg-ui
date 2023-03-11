import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Batch } from 'src/app/shared/model/batch';
import { BatchService } from 'src/app/shared/services/batch.service';
import { cashfreeSandbox } from 'cashfree-dropjs';


@Component({
  selector: 'app-batch-view',
  templateUrl: './batch-view.component.html',
  styleUrls: ['./batch-view.component.scss']
})
export class BatchViewComponent implements OnInit {
  batchName: string = "";
  batchData: Object[] = [];
  isLoggedIn: boolean = sessionStorage.getItem("student_send_otp_response") == null ? false : true;
  cashfreeObject: any;
  messageElement: any;
  constructor(private routes: ActivatedRoute, private batchService: BatchService, private router: Router, private elementRef: ElementRef) {
    this.cashfreeObject = new cashfreeSandbox.Cashfree();
   

    
   }

   ngAfterViewInit() {
    const dropinComponents = [
      {
        name: 'Order Details',
        id: 'order-details'
      },
      {
        name: 'Card',
        id: 'card'
      },
      {
        name: 'UPI',
        id: 'upi'
      },
      {
        name: 'Wallets',
        id: 'app'
      },
      {
        name: 'Netbanking',
        id: 'netbanking'
      },
      {
        name: 'Paylater',
        id: 'paylater'
      },
      {
        name: 'Credit Card EMI',
        id: 'creditcardemi'
      },
      {
        name: 'Cardless EMI',
        id: 'cardlessemi'
      }
    ];
    this.messageElement = this.elementRef.nativeElement.querySelector('.test');
    console.log(this.messageElement);

    fetch("/generate_token")

    this.cashfreeObject.initialiseDropin(this.messageElement, {
      orderToken : "v3#he81m7ldwtny5h",
      onSuccess: () => console.log("success"),
      onFailure: (error) => console.log(error),
      components: dropinComponents,
      style: {},
  });
  }
  
  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
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
    this.router.navigate(["/register"],{skipLocationChange: true});
  }

}
