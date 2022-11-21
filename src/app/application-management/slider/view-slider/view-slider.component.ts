import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'src/app/shared/model/slider';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-view-slider',
  templateUrl: './view-slider.component.html',
  styleUrls: ['./view-slider.component.scss']
})
export class ViewSliderComponent implements OnInit {
  id!: number
  imageSlider: any
  constructor(private sliderService: SliderService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sliderService.getSliderById(this.id).subscribe((data: Slider) => {
       console.log(data)
      this.imageSlider = data;

    })
  }

}
