import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'src/app/shared/model/slider';
import { TableData } from 'src/app/shared/model/table.data';
import { SliderService } from 'src/app/shared/services/slider.service';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.scss']
})
export class SliderListComponent implements OnInit {
  tableData: TableData = new TableData();
  sliderdata: Slider[] = [];
  id: any;
  loggedInUserRole: string = "";

  constructor(
    private sliderService: SliderService) {
      this.tableData.nameOfTable = "Slider List";
      this.tableData.buttonRoute = "/addSlider"
      this.tableData.buttonName = "Add Slider"
  }


  ngOnInit(): void {
    const loggedInUser = JSON.parse(sessionStorage.getItem('staff_dto') || '{}');
    this.loggedInUserRole = loggedInUser.vitgStaffDTO.role.roleName;

    this.sliderService.getAllSliders().subscribe(data => {
      data.forEach(val => {
        const actions = [
          {icon: "visibility", route: '/viewslider/', routeArgs: val.id}, 
          {icon: "edit", route: '/editslider/', routeArgs: val.id},
          {icon: "delete", route: '/editcourse/', routeArgs: val.id}
        ];
        const obj = {
          id: val.id,
          name: val.name,
          status: val.status,
          actions: actions
        }
        this.tableData.createtData(obj);
      });
    });

  }

  deleteSlider(id: number) {
    this.sliderService.deleteSliderById(id).subscribe(data => {
      this.sliderdata = this.sliderdata.filter(item => item.id !== id);
    });
  }
}

