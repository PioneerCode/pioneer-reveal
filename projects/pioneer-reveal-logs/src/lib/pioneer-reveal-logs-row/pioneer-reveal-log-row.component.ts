import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hit, IndexTypeEnum } from '../models/response/hits';

/**
 * Individual row in log table
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-log-row]',
  templateUrl: './pioneer-reveal-log-row.component.html',
  styleUrls: ['./pioneer-reveal-log-row.component.scss']
})
export class PioneerRevealLogRowComponent {
  @Input() log: Hit;
  @Output() expandRowSelected: EventEmitter<Hit> = new EventEmitter();

  public IndexTypeEnum = IndexTypeEnum;

  onExpandRowSelected() {
    this.log.pioneerRevelTracking.selected = !this.log.pioneerRevelTracking.selected;
  }
}
