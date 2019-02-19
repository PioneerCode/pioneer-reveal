import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { KeyValue } from './models/key-value';
import { SearchRequest } from '../core/models/request/search-request';
import { Query, BoolMustRange, BoolMustMatchPhrase } from '../core/models/request/query';

/**
 * Handles all query building for search operation
 */
@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogQueryBuilder {
  public searchRequest = new SearchRequest();

  get query(): Query {
    return this.searchRequest.query;
  }

  /**
   * Collection of user selected indices
   */
  private _currentSearchIndices = [] as string[];
  get currentSearchIndices(): string {
    let indices = '';
    this._currentSearchIndices.forEach(index => {
      indices = `${indices}${index},`;
    });
    return indices.slice(0, -1);
  }

  /**
   * Collection of current filters
   * Used for UI display
   */
  public currentSearchFilters = [] as KeyValue[];

  constructor(
  ) {
    this.searchRequest.size = 20;
    this.searchRequest.from = 0;
    this.searchRequest.query = new Query();
  }

  /**
   * Add filter to query and internal tracking if needed
   * @param propertyName Filter name
   * @param value Filter value
   * @param trackInternally If true, we set internal tracking so pioneer-reveal-logs-top-bar can display it
   */
  addFilter(key: string, value: string | number | boolean, trackInternally = true): void {
    const val = {
      match_phrase: {}
    } as BoolMustMatchPhrase;
    val.match_phrase[key] = {};
    val.match_phrase[key]['query'] = value;

    this.query.bool.must.push(val);

    if (trackInternally) {
      this.currentSearchFilters.push({
        key: key,
        value: value
      } as KeyValue);
    }
  }

  /**
   * Remove filter from query and remove from internal tracking if needed
   * @param propertyName Filter name
   * @param value Filter value
   * @param trackInternally If true, we remove internal tracking so pioneer-reveal-logs-top-bar can remove it from ui
   */
  removeFilter(propertyName: string, value: string | number | boolean, trackInternally = true): void {
    const index = this.getMustMatchIndexBasedOnPropertyName(propertyName, value);

    delete this.query.bool.must[index]['match_phrase'][propertyName];

    if (trackInternally) {
      for (let i = 0; i < this.currentSearchFilters.length; i++) {
        const filter = this.currentSearchFilters[i];
        if (filter.key === propertyName) {
          this.currentSearchFilters.splice(i, 1);
          break;
        }
      }
    }

    if (!this.isEmptyObject(this.query.bool.must[index])) {
      this.query.bool.must.splice(index, 1);
    }
  }

  /**
   * Determine if a filter is current set
   * @param prop Filter to search for
   */
  isCurrentFilter(prop: KeyValue): boolean {
    for (let i = 0; i < this.currentSearchFilters.length; i++) {
      const element = this.currentSearchFilters[i];
      if (prop.value === element.value && prop.key === element.key) {
        return true;
      }
    }
    return false;
  }

  /**
   * When user selects a time range filter on the UI,
   * we set this as the greater then range.
   */
  addTimeRange(gte: number) {
    let index = this.getMustIndexBasedOnPropertyName('range');

    if (index === undefined) {
      this.query.bool.must.push({
        range: {}
      } as BoolMustRange);
      index = this.query.bool.must.length - 1;
    }

    this.query.bool.must[index]['range']['creationTimestamp'] = {
      'lte': moment().utc().unix(),
      'gte': gte,
      'format': 'epoch_millis'
    };
  }

  /**
   * Add a new index to a collection of indices that will be used to search against.
   * @param index Name of index to add.
   */
  setIndex(index: string) {
    this._currentSearchIndices.push(index);
  }

  /**
   * Remove new index form collection of indices that will be used to search against.
   * @param index Name of index to remove
   */
  removeIndex(index: string) {
    for (let i = 0; i < this._currentSearchIndices.length; i++) {
      if (this._currentSearchIndices[i] === index) {
        this._currentSearchIndices.splice(i, 1);
      }
    }
  }

  /**
   * Determine if index is current set
   * @param index Name of index to operate on
   */
  isIndexSet(index: string): boolean {
    return this._currentSearchIndices.includes(index);
  }

  /**
   * Look through every index in this.query.bool to see if it has
   * the supplied property name.  If it does, return the index.
   *
   * We need to check both name and value because we could be
   * searching across multiple Applications and Layers
   *
   * @param propName Property Name
   * @param value Value of property
   */
  private getMustIndexBasedOnPropertyName(propName: string): number {
    for (let i = 0; i < this.query.bool.must.length; i++) {
      const element = this.query.bool.must[i];
      if (element.hasOwnProperty(propName)) {
        return i;
      }
    }
    return undefined;
  }

  /**
   * Determine if any "match_phrase" must clause exist with the property name of
   * @param propertyName Name of property to search for
   */
  private getMustMatchIndexBasedOnPropertyName(propertyName: string, value: string | number | boolean): number {
    for (let i = 0; i < this.query.bool.must.length; i++) {
      const element = this.query.bool.must[i];
      if (element.hasOwnProperty('match_phrase')) {
        if (element['match_phrase'].hasOwnProperty(propertyName) && element['match_phrase'][propertyName].query === value) {
          return i;
        }
      }
    }
    return undefined;
  }

  /**
   * Determine if object has any properties associated with it.
   * @param obj Object to test
   */
  private isEmptyObject(obj: any) {
    for (const prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  }
}
