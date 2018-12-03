import { Component } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';
import { Property } from '../models/key-value';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

@Component({
  selector: 'pioneer-reveal-log-filters',
  templateUrl: './pioneer-reveal-log-filters.component.html',
  styleUrls: ['./pioneer-reveal-log-filters.component.scss']
})
export class PioneerRevealLogFiltersComponent {

  constructor(public logService: PioneerRevealLogService,
    public queryBuilder: PioneerRevealLogQueryBuilder) { }

  onRemoveClick(filter: Property): void {
    this.queryBuilder.removeFilter(filter.key);
    this.logService.getLogs();
  }
}
