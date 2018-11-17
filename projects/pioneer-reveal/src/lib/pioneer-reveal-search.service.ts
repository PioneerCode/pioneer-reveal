import { Injectable } from '@angular/core';
import { Query, BoolMustObjectOrderEnum } from './models/query';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealSearchService {
  query = new Query();

  constructor() { }

  addFilter(key: string, value: string | number): void {
    this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase][key] = value;
  }

  removeFilter(key: string): void {
    delete this.query.bool.must[BoolMustObjectOrderEnum.BoolMustMatchPhrase][key];
  }
}
