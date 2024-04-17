import { TestBed } from '@angular/core/testing';

import { OwnAuthService } from './own-auth.service';

describe('OwnAuthService', () => {
  let service: OwnAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
