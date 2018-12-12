import { Component, Input } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { Property } from '../models/key-value';
import { Hit } from '../models/response/hits';
import { PioneerRevealLogService } from '../logs.service';
import { StateService } from '../state.service';

/**
 * Individual expanded row in log table.
 * Displayed when user clicks "expand arrow" in column 1.
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[logs-row-expanded]',
  templateUrl: './row-expanded.component.html',
  styleUrls: ['./row-expanded.component.scss']
})
export class RowExpandedComponent {
  @Input() log: Hit;

  /**
   * Parent will mark this true when user expands this row.
   */
  @Input() active = false;

  selectedTab = 'formatted';

  constructor(
    public stateService: StateService,
    private logsService: PioneerRevealLogService,
    private queryBuilder: PioneerRevealLogQueryBuilder) { }

  onAddFilter(prop: Property) {
    if (this.stateService.isLoading) {
      return;
    }
    prop.isFilter = true;
    this.queryBuilder.addFilter(prop.key, prop.value);
    this.logsService.getLogs();
  }

  onRemoveFilter(prop: Property) {
    if (this.stateService.isLoading) {
      return;
    }
    prop.isFilter = false;
    this.queryBuilder.removeFilter(prop.key, prop.value);
    this.logsService.getLogs();
  }
}
