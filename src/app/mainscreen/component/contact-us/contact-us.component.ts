import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FaqData } from 'src/app/shared/model/FaqData';
import { EqnuiryService } from 'src/app/shared/services/enquiry.service';
import { FaqService } from 'src/app/shared/services/faq.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  items: FaqData[];
  expandedIndex = 0;

  constructor(private formBuilder: FormBuilder, private enquiryService: EqnuiryService, private faqService: FaqService) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

    this.faqService.getAllFaqs().subscribe(data => {console.log(data); this.items = data.data})

   }

  ngOnInit(): void {
  }

  onSubmit() {

    const formData = this.contactForm.value;
    console.log(formData);
    const contactDetails: Object = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message
    }

    this.enquiryService.createEnquiry(contactDetails).subscribe((data: Object) => {
      this.contactForm.patchValue({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      alert("Your request submitted, our agent will reach you soon");
    });

  }
}
