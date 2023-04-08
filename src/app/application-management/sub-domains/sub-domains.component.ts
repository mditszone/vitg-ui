import { Component } from '@angular/core';
import { SubDomainService } from 'src/app/shared/services/sub-domain.service';

@Component({
  selector: 'app-sub-domains',
  templateUrl: './sub-domains.component.html',
  styleUrls: ['./sub-domains.component.scss']
})
export class SubDomainsComponent {

  constructor(private subDomainsService: SubDomainService) {

    // this.subDomainsService.createSubDomain().subscribe(response => {
    //   console.log(response)
    // })
  }
}
