import { TestBed } from '@angular/core/testing';

import { PioneerRevealLogService } from './logs.service';

describe('PioneerRevealLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealLogService = TestBed.get(PioneerRevealLogService);
    expect(service).toBeTruthy();
  });
});
