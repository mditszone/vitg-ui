import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EqnuiryService } from '../shared/services/enquiry.service';

@Component({
  selector: 'app-enquiry-reply',
  templateUrl: './enquiry-reply.component.html',
  styleUrls: ['./enquiry-reply.component.scss']
})
export class EnquiryReplyComponent implements OnInit {

  enquriyForm: any;
  enquiry: any;
  constructor(private formBuilder: FormBuilder, private enquiryService: EqnuiryService, private route: ActivatedRoute, private router: Router) {
    this.enquriyForm = this.formBuilder.group({
      name: [''],
      email: [''],
      message: [''],
      reply: ['', [Validators.required]]
    });

    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.enquiry = JSON.parse(params.get("id"));
      this.enquriyForm.patchValue({
        name: this.enquiry.name,
        email: this.enquiry.email,
        message: this.enquiry.message,
      })
    });

   }

  ngOnInit(): void {
  }



  onSubmit() {

    const enquiryForm = this.enquriyForm.value;
    const email = {
      subject: "Enquiry",
      to: this.enquiry.email,
      message: enquiryForm.message
    }
    console.log(email);
    this.enquiryService.sendEmail(email).subscribe(data => {
      this.router.navigate(['/enquaries']);
    });

  }
}
