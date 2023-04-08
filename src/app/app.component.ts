import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DisableRightClickService } from './shared/services/disable-right-click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vitg';
  constructor(private rightClickDisable: DisableRightClickService, private router: Router) {

    var full = window.location.host
    var parts = full.split('.')
    console.log(parts)
    var sub = parts[0]
    console.log(sub)
    if(sub === "faculty"){
      this.router.navigate(['register'])
    }
    // var domain = parts[1]
    // var type = parts[2]
    //sub is 'subdomain', 'domain', type is 'com'
    //var newUrl = 'http://' + domain + '.' + type + '/your/other/path/' + subDomain
   // window.open(newUrl);
    //console.log(full)
  }
  // ngOnInit() {
  //   this.rightClickDisable.disableRightClick();
  // }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // If the previous URL was blank, then the user is directly accessing this page
    if (this.router.url === '/') {
      this.router.navigate(['/']); // Navigate away to some other page
      return false;
    }
    return true;
  }
}