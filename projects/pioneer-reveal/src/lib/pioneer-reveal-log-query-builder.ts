import { Injectable } from '@angular/core';
import { Query, BoolMustObjectOrderEnum, BoolMustMatchPhrase } from './models/query';
import { KeyValue } from './models/key-value';

/**
 * Handles all query building for search operation
 */
@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogQueryBuilder {
  query = new Query();

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

  constructor() { }

  addFilter(key: string, value: string | number): void {
    // Dynamically create match phrase if does not exist.
    if (this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase] === undefined) {
      this.query.bool.must.push({
        match_phrase: {}
      } as BoolMustMatchPhrase);
    }
    this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase]['match_phrase'][key] = {};
    this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase]['match_phrase'][key]['query'] = value;
    this.currentSearchFilters.push({
      key: key,
      value: value
    } as KeyValue);
  }

  removeFilter(key: string): void {
    delete this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase]['match_phrase'][key];
    for (let i = 0; i < this.currentSearchFilters.length; i++) {
      const filter = this.currentSearchFilters[i];
      if (filter.key === key) {
        this.currentSearchFilters.splice(i, 1);
        break;
      }
    }

    if (!this.isEmptyObject(this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase])) {
      this.query.bool.must.splice(BoolMustObjectOrderEnum.BoolMustMatchPhrase, 1);
    }
  }

  isCurrentFilter(prop: KeyValue): boolean {
    for (let i = 0; i < this.currentSearchFilters.length; i++) {
      const element = this.currentSearchFilters[i];
      if (prop.value === element.value && prop.key === element.key) {
        return true;
      }
    }
    return false;
  }

  setIndex(index: string) {
    this._currentSearchIndices.push(index);
  }

  removeIndex(index: string) {
    for (let i = 0; i < this._currentSearchIndices.length; i++) {
      if (this._currentSearchIndices[i] === index) {
        this._currentSearchIndices.splice(i, 1);
      }
    }
  }

  isIndexSet(index: string): boolean {
    return this._currentSearchIndices.includes(index);
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
