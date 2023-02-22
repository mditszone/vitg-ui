import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  showNavigationArrows = false;
	showNavigationIndicators = false;
	imageObject = [
    {
      img: '../../../../assets/about-us/image1.png',
      thumbImage: '../../../../assets/about-us/image1.png',
    },
    {
      img: '../../../../assets/about-us/image3.png',
      thumbImage: '../../../../assets/about-us/image3.png',
    },
    {
      img: '../../../../assets/about-us/image2.png',
      thumbImage: '../../../../assets/about-us/image2.png',
    }
    
  ]
	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
