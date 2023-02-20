import { TestBed } from '@angular/core/testing';

import { RolGuardGuard } from './rol-guard.guard';

describe('RolGuardGuard', () => {
  let guard: RolGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
