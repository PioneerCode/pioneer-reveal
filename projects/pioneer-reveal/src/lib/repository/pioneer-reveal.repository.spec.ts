import { TestBed } from '@angular/core/testing';

import { PioneerRevealRepository } from './pioneer-reveal.repository';

describe('PioneerRevealRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealRepository = TestBed.get(PioneerRevealRepository);
    expect(service).toBeTruthy();
  });
});
