import { Component, OnInit } from '@angular/core';
import { FaqData } from 'src/app/shared/model/FaqData';
import { FaqService } from 'src/app/shared/services/faq.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  items: FaqData[];
  constructor(private faqService: FaqService) {
    this.faqService.getAllFaqs().subscribe(data => {console.log(data); this.items = data.data})
  }

  ngOnInit(): void {
  }

}
