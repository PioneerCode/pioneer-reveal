import { Component, OnInit } from '@angular/core';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';

/**
 * Allow user to filter table row view by current options
 */
@Component({
  selector: 'pioneer-reveal-log-fields',
  templateUrl: './pioneer-reveal-log-fields.component.html',
  styleUrls: ['./pioneer-reveal-log-fields.component.scss']
})
export class PioneerRevealLogFieldsComponent implements OnInit {

  constructor(public queryBuilder: PioneerRevealLogQueryBuilder) { }

  ngOnInit() {
  }
}
