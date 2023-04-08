import { TestBed } from '@angular/core/testing';

import { SubDomainService } from './sub-domain.service';

describe('SubDomainService', () => {
  let service: SubDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
