import { Component, OnInit } from '@angular/core';
import { ConfigurationOptions, TooltipOptionsEnum } from 'intl-input-phone';

@Component({
  selector: 'app-customized-tooltip',
  templateUrl: './customized-tooltip.component.html',
  styleUrls: ['./customized-tooltip.component.css']
})
export class CustomizedTooltipComponent implements OnInit {

  configOption1: ConfigurationOptions;

  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "ToolTipType1";
    

  }

  ngOnInit() {
  }

}