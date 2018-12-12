import { Component } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { Property } from '../models/key-value';
import { PioneerRevealLogService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logs-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  constructor(public logService: PioneerRevealLogService,
    public queryBuilder: PioneerRevealLogQueryBuilder) { }

  onRemoveClick(filter: Property): void {
    this.queryBuilder.removeFilter(filter.key, filter.value);
    this.logService.getLogs();
  }
}
