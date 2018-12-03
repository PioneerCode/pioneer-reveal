import { Injectable } from '@angular/core';

import { PioneerRevealRepository } from './pioneer-reveal.repository';
import { PioneerRevealLogQueryBuilder } from './pioneer-reveal-logs-query-builder';
import { SearchResponse } from './models/response/search-response';
import { KeyValue, Property } from './models/key-value';
import { Hit } from './models/response/hits';
import { StateService } from './state.service';

/**
 * Shared core functionality used across components
 */
@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogService {
  public searchResponse: SearchResponse;
  public logs = [] as Hit[];

  /**
   * Collection of ids that represent all current
   * rows expanded in the table.
   */
  private _currentRowsOpen = [] as string[];
  get currentRowsOpen(): string[] {
    return this._currentRowsOpen;
  }

  // TODO: Figure out why NodeJs.Timer throws "Cannot find namespace NodeJS"
  private refreshInterval: any;

  private _refreshRate: KeyValue;
  set refreshRate(rate: KeyValue) {
    this._refreshRate = rate;
    this.setInterval();
  }

  get refreshRate(): KeyValue {
    return this._refreshRate;
  }

  get isRefreshPaused(): boolean {
    return this.refreshRate.key === 'Pause';
  }

  get fields(): Property[] {
    if (this.logs.length > 0) {
      return this.logs[0].pioneerRevelTracking.sourceMap;
    }
    return [];
  }

  constructor(
    private stateService: StateService,
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository) {
  }

  /**
   * Get Logs based on the state of the query builder vs this.logs
   */
  getLogs() {
    this.stateService.isLoading = true;
    // this.setGreaterThenTimestamp();
    return this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices, this.queryBuilder.searchRequest)
      .subscribe((searchResponse) => {
        this.searchResponse = searchResponse;
        this.logs = [] as Hit[];
        this.logs = searchResponse.hits.hits.map(x => new Hit(x));
        this.bindOpenedState();
        this.stateService.isLoading = false;
      });
  }


  addCurrentRowsOpenId(id: string): void {
    this.currentRowsOpen.push(id);
  }

  removeCurrentRowsOpenId(id: string): void {
    const index = this.currentRowsOpen.indexOf(id);
    if (index !== -1) {
      this.currentRowsOpen.splice(index, 1);
    }
  }

  /**
   * Bind open state to current set of logs
   * TODO: Consider per issues.
   */
  private bindOpenedState() {
    this.logs.forEach(log => {
      for (let i = 0; i < this.currentRowsOpen.length; i++) {
        const element = this.currentRowsOpen[i];
        log.pioneerRevelTracking.selected = false;
        if (log._source.Id === element) {
          log.pioneerRevelTracking.selected = true;
          break;
        }
      }
    });
  }

  private setInterval(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    if (this.refreshRate.key !== 'Pause') {
      this.refreshInterval = setInterval(() => {
        this.getLogs();
      }, this._refreshRate.value * 1000);
    }
  }
}
