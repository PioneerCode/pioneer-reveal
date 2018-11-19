import { Component, OnInit } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';

@Component({
  selector: 'pioneer-reveal-pioneer-reveal-log-filters',
  templateUrl: './pioneer-reveal-log-filters.component.html',
  styleUrls: ['./pioneer-reveal-log-filters.component.scss']
})
export class PioneerRevealLogFiltersComponent implements OnInit {

  constructor(private queryBuilder: PioneerRevealLogQueryBuilder) { }

  ngOnInit() {
  }

}
