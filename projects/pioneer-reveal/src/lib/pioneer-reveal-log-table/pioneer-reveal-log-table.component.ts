import { Component, EventEmitter, Output } from '@angular/core';

import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { Hit } from '../models/search';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';

/**
 * Log Table
 */
@Component({
  selector: 'pioneer-reveal-log-table',
  templateUrl: './pioneer-reveal-log-table.component.html',
  styleUrls: ['./pioneer-reveal-log-table.component.scss']
})
export class PioneerRevealLogTableComponent {
  @Output() addFilterClicked: EventEmitter<void> = new EventEmitter();
  @Output() removeFilterClicked: EventEmitter<void> = new EventEmitter();

  logs = [] as Hit[];

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository
  ) { }

  getLogs() {
    return this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices)
      .subscribe((logs) => {
        this.logs = [] as Hit[];
        this.logs = logs.hits.hits.map(x => new Hit(x));
      });
  }

  onRemoveFilterClicked() {
    this.addFilterClicked.emit();
  }

  onAddFilterClicked() {
    this.removeFilterClicked.emit();
  }
}
