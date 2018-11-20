import { Component } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-log.service';

@Component({
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
