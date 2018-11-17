import { Injectable } from '@angular/core';
import { Query, BoolMustObjectOrderEnum, BoolMustMatchPhrase } from './models/query';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealSearchService {
  query = new Query();

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
    delete this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase]['match_all'][key];
  }
}
