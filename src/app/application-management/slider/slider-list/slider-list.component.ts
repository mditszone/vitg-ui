import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'src/app/shared/model/slider';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {

  sliderdata: Slider[] = [];
  id: any;
  loggedInUserRole: string = "";

  constructor(
    private sliderService: SliderService) {
  }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.sliderService.getAllSliders().subscribe(data => {
      this.sliderdata = data;
      console.log(this.sliderdata)
    });

  }

  deleteSlider(id: number) {
    this.sliderService.deleteSliderById(id).subscribe(data => {
      this.sliderdata = this.sliderdata.filter(item => item.id !== id);
    }
    );
  }
}

