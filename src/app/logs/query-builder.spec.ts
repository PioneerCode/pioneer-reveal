import { TestBed } from '@angular/core/testing';

import { PioneerRevealLogQueryBuilder } from './query-builder';

describe('PioneerRevealLogQueryBuilder', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerRevealLogQueryBuilder = TestBed.get(PioneerRevealLogQueryBuilder);
    expect(service).toBeTruthy();
  });
});
