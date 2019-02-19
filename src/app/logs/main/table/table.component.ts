import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { LogsService } from '../../logs.service';

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

  public length = 100;
  public pageSize = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageEvent: PageEvent;

  constructor(
    public logService: LogsService
  ) { }

  onPage(event: PageEvent) {
    this.pageEvent = event;
  }
}
