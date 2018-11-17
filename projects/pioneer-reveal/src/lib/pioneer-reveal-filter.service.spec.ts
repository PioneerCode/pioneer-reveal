import { TestBed } from '@angular/core/testing';

import { PioneerRevealFilterService } from './pioneer-reveal-filter.service';

describe('PioneerRevealFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealFilterService = TestBed.get(PioneerRevealFilterService);
    expect(service).toBeTruthy();
  });
});
