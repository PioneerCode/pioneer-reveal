import { TestBed } from '@angular/core/testing';

import { PioneerLogsErrorHandler } from './pioneer-logs-error.handler';

describe('PioneerLogsErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerLogsErrorHandler = TestBed.get(PioneerLogsErrorHandler);
    expect(service).toBeTruthy();
  });
});
