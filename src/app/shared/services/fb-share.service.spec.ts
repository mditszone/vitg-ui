import { TestBed } from '@angular/core/testing';

import { FbShareService } from './fb-share.service';

describe('FbShareService', () => {
  let service: FbShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
