import { Component } from '@angular/core';

import { PioneerRevealLogService } from '../logs.service';

/**
 * Log Table
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(
    public logService: PioneerRevealLogService
  ) { }
}
