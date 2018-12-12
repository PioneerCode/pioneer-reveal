import { Component } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { Property } from '../models/key-value';
import { PioneerRevealLogService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pioneer-reveal-log-filters',
  templateUrl: './pioneer-reveal-log-filters.component.html',
  styleUrls: ['./pioneer-reveal-log-filters.component.scss']
})
export class PioneerRevealLogFiltersComponent {

  constructor(public logService: PioneerRevealLogService,
    public queryBuilder: PioneerRevealLogQueryBuilder) { }

  onRemoveClick(filter: Property): void {
    this.queryBuilder.removeFilter(filter.key, filter.value);
    this.logService.getLogs();
  }
}
