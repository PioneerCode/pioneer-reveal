import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';
import { Property } from '../models/key-value';

@Component({
  selector: 'pioneer-reveal-pioneer-reveal-log-filters',
  templateUrl: './pioneer-reveal-log-filters.component.html',
  styleUrls: ['./pioneer-reveal-log-filters.component.scss']
})
export class PioneerRevealLogFiltersComponent implements OnInit {
  @Output() removeFilterClicked: EventEmitter<void> = new EventEmitter();

  constructor(private queryBuilder: PioneerRevealLogQueryBuilder) { }

  ngOnInit() {
  }

  onRemoveClick(filter: Property): void {
    this.queryBuilder.removeFilter(filter.key);
    this.removeFilterClicked.emit();
  }
}
