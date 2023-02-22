import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

  ngOnInit(): void {
  }

  showNavigationArrows = false;
	showNavigationIndicators = false;
	imageObject = [
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image1.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image1.png"
    },
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image2.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image2.png"
    },
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image3.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image3.png"
    },
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image4.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image4.png"
    },
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image5.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image5.png"
    },
    {
      img: "../../../../assets/trainings/MicrosoftTeams-image6.png",
      thumbImage: "../../../../assets/trainings/MicrosoftTeams-image6.png"
    },
    
  ]
}
