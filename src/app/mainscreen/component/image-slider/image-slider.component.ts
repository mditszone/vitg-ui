import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FaqData } from 'src/app/shared/model/FaqData';
import { FaqService } from 'src/app/shared/services/faq.service';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})

export class ImageSliderComponent implements OnInit {
  imageObject: Array<object> = [];
  items: FaqData[];
  constructor(private sliderService: SliderService, private cdr: ChangeDetectorRef, private faqService: FaqService,) {
    this.sliderService.getAllSliders().subscribe((data) => {
      for (let slider of data) {
        let ext = slider.name.split('.')[1]; // get image extension[png, jpeg, jpg]
        let base64Image = `data:image/${ext};base64,${slider.imageBytes}`;
        //console.log(base64Image);
        this.imageObject.push({
          image: base64Image,
          thumbImage: base64Image,
          alt: slider.name
        });
      }
    });
    this.faqService.getAllFaqs().subscribe(data => {console.log(data); this.items = data.data});
  }
  ngOnInit(): void {

  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
