import { Component } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { LogsService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logs-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent {
  constructor(
    public logService: LogsService,
    public queryBuilder: PioneerRevealLogQueryBuilder) {
  }
}
