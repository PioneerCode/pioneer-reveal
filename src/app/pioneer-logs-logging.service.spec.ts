import { TestBed } from '@angular/core/testing';

import { PioneerLogsLoggingService } from './pioneer-logs-logging.service';

describe('PioneerLogsLoggingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerLogsLoggingService = TestBed.get(PioneerLogsLoggingService);
    expect(service).toBeTruthy();
  });
});
