import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hit,  } from '../models/search-response';

/**
 * Individual row in log table
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-log-row]',
  templateUrl: './pioneer-reveal-log-row.component.html',
  styleUrls: ['./pioneer-reveal-log-row.component.scss']
})
export class PioneerRevealLogRowComponent implements OnInit {
  @Input() log: Hit;
  @Output() expandRowSelected: EventEmitter<Hit> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onExpandRowSelected() {
    this.log.pioneerRevelTracking.selected = !this.log.pioneerRevelTracking.selected;
  }
}
