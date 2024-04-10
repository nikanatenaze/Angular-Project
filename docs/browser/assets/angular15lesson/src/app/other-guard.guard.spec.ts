import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { otherGuardGuard } from './other-guard.guard';

describe('otherGuardGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => otherGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
