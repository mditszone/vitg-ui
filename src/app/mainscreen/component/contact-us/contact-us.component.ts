import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqnuiryService } from 'src/app/shared/services/enquiry.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private enquiryService: EqnuiryService) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
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
      })
      alert("Your request submitted, our agent will reach you soon");
    });

  }
}
