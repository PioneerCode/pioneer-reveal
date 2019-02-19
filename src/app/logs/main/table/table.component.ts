import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { LogsService } from '../../logs.service';
import { PioneerRevealLogQueryBuilder } from '../../query-builder';

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

  get length(): number {
    if (this.logService.searchResponse) {
      return this.logService.searchResponse.hits.total;
    }
    return 0;
  }

  public pageSize = 25;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageEvent: PageEvent;

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    public logService: LogsService
  ) { }

  onPage(event: PageEvent) {
    this.pageEvent = event;
    this.queryBuilder.searchRequest.size = this.pageEvent.pageSize;
    this.queryBuilder.searchRequest.from = this.pageEvent.pageIndex * this.pageEvent.pageSize;
    this.logService.getLogs();
  }
}
