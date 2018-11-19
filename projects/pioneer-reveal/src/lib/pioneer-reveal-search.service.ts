import { Injectable } from '@angular/core';
import { Query, BoolMustObjectOrderEnum, BoolMustMatchPhrase } from './models/query';

/**
 * Handles all query building for search operation
 */
@Injectable({
  providedIn: 'root'
})
export class PioneerRevealSearchService {
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
  }

  removeFilter(key: string): void {
    delete this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase]['match_phrase'][key];
  }

  setIndex(index: string) {
    this._currentSearchIndices.push(index);
  }

  removeIndex(index: string) {
    this._currentSearchIndices.push(index);
    for (let i = 0; i < this._currentSearchIndices.length - 1; i++) {
      if (this._currentSearchIndices[i] === index) {
        this._currentSearchIndices.splice(i, 1);
      }
    }
  }
}
