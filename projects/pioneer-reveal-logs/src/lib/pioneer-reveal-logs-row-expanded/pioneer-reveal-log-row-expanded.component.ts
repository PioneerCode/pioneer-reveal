import { Component, Input } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';
import { KeyValue } from '../models/key-value';
import { Hit } from '../models/response/hits';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

/**
 * Individual expanded row in log table.
 * Displayed when user clicks "expand arrow" in column 1.
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-log-row-expanded]',
  templateUrl: './pioneer-reveal-log-row-expanded.component.html',
  styleUrls: ['./pioneer-reveal-log-row-expanded.component.scss']
})
export class PioneerRevealLogRowExpandedComponent {
  @Input() log: Hit;

  /**
   * Parent will mark this true when user expands this row.
   */
  @Input() active = false;

  selectedTab = 'formatted';

  constructor(
    private logsService: PioneerRevealLogService,
    private queryBuilder: PioneerRevealLogQueryBuilder) { }

  onAddFilter(prop: KeyValue) {
    this.queryBuilder.addFilter(prop.key, prop.value);
    this.logsService.getLogs();
  }

  onRemoveFilter(prop: KeyValue) {
    this.queryBuilder.removeFilter(prop.key);
    this.logsService.getLogs();
  }
}
