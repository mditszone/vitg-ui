import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/shared/model/slider';
import { SliderService } from 'src/app/shared/services/slider.service';

// class sliderImage {
//   image: string = "";
//   thumbImage: string = ""
//   title: string = ""
// };
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  sliderdata: any;
  imageObject: Array<Slider> = [];
  retrievedImage: any;
  base64Data: any;
  base64: any
  sliderImages: any = [];
  image: any;
  images: any;
  constructor(private sliderService: SliderService,) { }

  ngOnInit(): void {
    this.sliderService.getAllSliders().subscribe((data: any) => {
     
      for (let slider of data) {
        this.base64Data = slider['image'];
        this.base64=slider.thumbImage;
        
        this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data +this.base64;
        slider.image=this.retrievedImage;
        //console.log(slider.image);
      }
    this.imageObject = data;
    });
  }
}
