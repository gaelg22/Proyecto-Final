import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { miguardGuard } from './miguard.guard';

describe('miguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => miguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
