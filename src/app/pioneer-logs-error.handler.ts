import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { PioneerLogsLoggingService } from './pioneer-logs-logging.service';

@Injectable({
  providedIn: 'root'
})
export class PioneerLogsErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: any): void {
    const loggingService = this.injector.get(PioneerLogsLoggingService);
    const message = error.message ? error.message : error.toString();
    loggingService.logError(message, error);
    throw error;
  }
}
