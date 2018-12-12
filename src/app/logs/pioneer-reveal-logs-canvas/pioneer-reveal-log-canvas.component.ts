import { Component } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pioneer-reveal-log-canvas',
  templateUrl: './pioneer-reveal-log-canvas.component.html',
  styleUrls: ['./pioneer-reveal-log-canvas.component.scss']
})
export class PioneerRevealLogCanvasComponent {
  constructor(
    public logService: PioneerRevealLogService,
    public queryBuilder: PioneerRevealLogQueryBuilder) {
  }
}
