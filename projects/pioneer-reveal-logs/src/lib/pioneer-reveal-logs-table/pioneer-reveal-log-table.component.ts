import { Component } from '@angular/core';

import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

/**
 * Log Table
 */
@Component({
  selector: 'pioneer-reveal-log-table',
  templateUrl: './pioneer-reveal-log-table.component.html',
  styleUrls: ['./pioneer-reveal-log-table.component.scss']
})
export class PioneerRevealLogTableComponent {
  constructor(
    public logService: PioneerRevealLogService,
  ) { }

  getLogs() {
     this.logService.getLogs();
  }

  onAddFilterClicked() {
    this.logService.getLogs();
  }

  onRemoveFilterClicked() {
    this.logService.getLogs();
  }
}
