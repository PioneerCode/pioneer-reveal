import { TestBed } from '@angular/core/testing';

import { PioneerRevealService } from './pioneer-reveal.service';

describe('PioneerRevealService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealService = TestBed.get(PioneerRevealService);
    expect(service).toBeTruthy();
  });
});
