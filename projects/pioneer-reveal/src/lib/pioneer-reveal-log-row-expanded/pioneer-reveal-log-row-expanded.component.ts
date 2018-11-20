import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Hit } from '../models/search-response';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';
import { KeyValue } from '../models/key-value';

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
export class PioneerRevealLogRowExpandedComponent implements OnInit {
  @Input() log: Hit;
  @Output() addFilterClicked: EventEmitter<void> = new EventEmitter();
  @Output() removeFilterClicked: EventEmitter<void> = new EventEmitter();

  selectedTab = 'formatted';

  constructor(private queryBuilder: PioneerRevealLogQueryBuilder) { }

  ngOnInit() {
  }

  onAddFilter(prop: KeyValue) {
    this.queryBuilder.addFilter(prop.key, prop.value);
    this.addFilterClicked.emit();
  }

  onRemoveFilter(prop: KeyValue) {
    this.queryBuilder.removeFilter(prop.key);
    this.removeFilterClicked.emit();
  }
}
