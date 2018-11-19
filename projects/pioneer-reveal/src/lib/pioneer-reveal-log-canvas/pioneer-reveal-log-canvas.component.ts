import { Component,  ViewChild } from '@angular/core';

import { PioneerRevealLogTableComponent } from '../pioneer-reveal-log-table/pioneer-reveal-log-table.component';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';

@Component({
  selector: 'pioneer-reveal-log-canvas',
  templateUrl: './pioneer-reveal-log-canvas.component.html',
  styleUrls: ['./pioneer-reveal-log-canvas.component.scss']
})
export class PioneerRevealLogCanvasComponent {
  @ViewChild(PioneerRevealLogTableComponent) pioneerRevealLogTableComponent: PioneerRevealLogTableComponent;

  constructor(private queryBuilder: PioneerRevealLogQueryBuilder) {
  }

  onIndexSelected() {
    this.pioneerRevealLogTableComponent.getLogs();
  }

  onRemoveFilterClicked() {
    console.log('a');
  }

  onAddFilterClicked() {
    console.log('b');
  }
}
