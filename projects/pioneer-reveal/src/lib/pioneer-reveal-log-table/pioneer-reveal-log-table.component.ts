import { Component, EventEmitter, Output } from '@angular/core';

import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { Hit } from '../models/search';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-log.service';

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
