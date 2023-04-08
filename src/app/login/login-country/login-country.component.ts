import { Component } from '@angular/core';
import { ConfigurationOptions } from 'intl-input-phone';

@Component({
  selector: 'app-login-country',
  templateUrl: './login-country.component.html',
  styleUrls: ['./login-country.component.scss']
})
export class LoginCountryComponent {
  configOption1: ConfigurationOptions;

  constructor() {
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "ToolTipType1";
    

  }

  ngOnInit() {
  }
  
}
