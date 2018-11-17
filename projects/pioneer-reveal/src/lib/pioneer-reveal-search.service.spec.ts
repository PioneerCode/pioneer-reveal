import { TestBed } from '@angular/core/testing';

import { PioneerRevealSearchService } from './pioneer-reveal-search.service';

describe('PioneerRevealSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealSearchService = TestBed.get(PioneerRevealSearchService);
    expect(service).toBeTruthy();
  });
});
