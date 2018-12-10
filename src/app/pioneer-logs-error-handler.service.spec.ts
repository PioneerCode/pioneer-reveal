import { TestBed } from '@angular/core/testing';

import { PioneerLogsErrorHandlerService } from './pioneer-logs-error-handler.service';

describe('PioneerLogsErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PioneerLogsErrorHandlerService = TestBed.get(PioneerLogsErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
