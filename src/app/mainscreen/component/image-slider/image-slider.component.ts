import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Slider } from 'src/app/shared/model/slider';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})

export class ImageSliderComponent implements OnInit {
  imageObject: Array<object> = [];
  constructor(private sliderService: SliderService, private cdr: ChangeDetectorRef) {
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
  }
  ngOnInit(): void {

  }
  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
}
