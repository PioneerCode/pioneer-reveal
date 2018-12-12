import { Component } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { PioneerRevealLogService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'log-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  constructor(
    public logService: PioneerRevealLogService,
    public queryBuilder: PioneerRevealLogQueryBuilder) {
  }
}
