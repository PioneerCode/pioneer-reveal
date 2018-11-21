import { Injectable } from '@angular/core';

import { PioneerRevealRepository } from './pioneer-reveal.repository';
import { PioneerRevealLogQueryBuilder } from './pioneer-reveal-log-query-builder';
import { Hit, SearchResponse } from './models/search-response';
import { KeyValue } from './models/key-value';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogService {
  public searchResponse: SearchResponse;
  public logs = [] as Hit[];

  // TODO: Figure out why NodeJs.Timer throws "Cannot find namespace NodeJS"
  private _refreshInterval: any;

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

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository) {
  }

  getLogs() {
    return this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices, this.queryBuilder.searchRequest)
      .subscribe((searchResponse) => {
        this.searchResponse = searchResponse;
        this.logs = [] as Hit[];
        this.logs = searchResponse.hits.hits.map(x => new Hit(x));
      });
  }

  private setInterval() {
    if (this._refreshInterval) {
      clearInterval(this._refreshInterval);
    }
    if (this.refreshRate.key !== 'Pause') {
      this._refreshInterval = setInterval(() => {
        console.log(this._refreshRate);
      }, this._refreshRate.value * 1000);
    }
  }
}
