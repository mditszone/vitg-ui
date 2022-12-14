import { Component } from '@angular/core';
import { DisableRightClickService } from './shared/services/disable-right-click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitg';
  constructor(private rightClickDisable: DisableRightClickService) {}
  // ngOnInit() {
  //   this.rightClickDisable.disableRightClick();
  // }
}