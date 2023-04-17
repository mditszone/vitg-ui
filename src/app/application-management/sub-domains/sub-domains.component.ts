import { Component } from '@angular/core';
import { SubDomainService } from 'src/app/shared/services/sub-domain.service';

@Component({
  selector: 'app-sub-domains',
  templateUrl: './sub-domains.component.html',
  styleUrls: ['./sub-domains.component.scss']
})
export class SubDomainsComponent {
  subDomain: any
  constructor(private subDomainsService: SubDomainService) {}

  onKey(event) {
    this.subDomain = event.target.value;
  }
  createSubDomain(){
    this.subDomainsService.createSubDomain(this.subDomain).subscribe(response => {
      console.log(response)
    })
  }
}
