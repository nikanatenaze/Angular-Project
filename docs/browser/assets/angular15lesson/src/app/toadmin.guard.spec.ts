import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { toadminGuard } from './toadmin.guard';

describe('toadminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => toadminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
