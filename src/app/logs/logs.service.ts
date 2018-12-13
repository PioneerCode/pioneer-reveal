import { Injectable } from '@angular/core';

import { PioneerRevealLogQueryBuilder } from './query-builder';
import { KeyValue, Property } from './models/key-value';
import { StateService } from './state.service';
import { PioneerRevealRepository } from '../core/pioneer-reveal.repository';
import { Hit, IndexTypeEnum } from '../core/models/response/hits';
import { SearchResponse } from '../core/models/response/search-response';

/**
 * Shared core functionality used across components
 */
@Injectable({
  providedIn: 'root'
})
export class LogsService {
  public searchResponse: SearchResponse;
  public logs = [] as Hit[];

  /**
   * Realtime toggle.
   * Needs to stay in sync with pioneer-reveal-log-to-bar.component
   */
  public realtimeChecked = true;

  /**
   * Key - Value collection representing what fields are selected in
   * the pioneer-reveal-logs-fields component
   * rows expanded in the table.
   * {
   *   [id: string]: boolean
   * }
   */
  public currentFieldsSelected = {};

  /**
   * If > 0 fields have been selected in the pioneer-reveal-logs-fields
   * component, return true;
   */
  get isThereAFieldSelected(): boolean {
    for (const key in this.currentFieldsSelected) {
      if (this.currentFieldsSelected.hasOwnProperty(key) && this.currentFieldsSelected[key]) {
        return true;
      }
    }
    return false;
  }

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
    this.queryBuilder.setIndex(IndexTypeEnum.Error);
    this.getLogs();
  }

  /**
   * Get Logs based on the state of the query builder vs this.logs
   */
  getLogs() {
    this.stateService.isLoading = true;
    this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices, this.queryBuilder.searchRequest)
      .subscribe((searchResponse) => {
        this.searchResponse = searchResponse;
        this.logs = searchResponse.hits.hits.map(x => new Hit(x));
        this.bindOpenedState();
        this.initializeFieldsSelected();
        this.stateService.isLoading = false;
      });
  }

  /**
   * Cache id for row that has been expanded
   */
  addCurrentRowsOpenId(id: string): void {
    this.currentRowsOpen.push(id);
  }

  /**
   * Remove ached because row that was expanded, got shrunk.
   * @param id Log Id
   */
  removeCurrentRowsOpenId(id: string): void {
    const index = this.currentRowsOpen.indexOf(id);
    if (index !== -1) {
      this.currentRowsOpen.splice(index, 1);
    }
  }

  /**
   * If _currentFieldsSelected has not been set,
   * initialize it with all properties from Pioneer Logs.
   */
  private initializeFieldsSelected() {
    // Ensure this happens only on the first time logs have been grabbed.
    if (this.currentFieldsSelected) {
      return;
    }
    this.logs[0].pioneerRevelTracking.sourceMap.forEach(prop => {
      if (!prop.isPioneerProperty) {
        return;
      }
      this.currentFieldsSelected[prop.key] = false;
    });
  }

  /**
   * Bind open state to current set of logs
   * TODO: Consider perf issues.
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

  /**
   * Set interval timer for refresh rate
   */
  private setInterval(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
    if (this.refreshRate.key !== 'Paused' || !this.realtimeChecked) {
      this.refreshInterval = setInterval(() => {
        this.getLogs();
      }, this._refreshRate.value * 1000);
    }
  }
}