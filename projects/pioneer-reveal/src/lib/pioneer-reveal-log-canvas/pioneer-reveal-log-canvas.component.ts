import { Component, OnInit, ViewChild } from '@angular/core';

import { PioneerRevealLogTableComponent } from '../pioneer-reveal-log-table/pioneer-reveal-log-table.component';

@Component({
  selector: 'pioneer-reveal-log-canvas',
  templateUrl: './pioneer-reveal-log-canvas.component.html',
  styleUrls: ['./pioneer-reveal-log-canvas.component.scss']
})
export class PioneerRevealLogCanvasComponent implements OnInit {
  @ViewChild(PioneerRevealLogTableComponent) pioneerRevealLogTableComponent: PioneerRevealLogTableComponent;

  constructor() { }

  ngOnInit() {
  }

  onIndexSelected(indexName: string) {
    this.pioneerRevealLogTableComponent.getLogs(indexName);
  }
}
