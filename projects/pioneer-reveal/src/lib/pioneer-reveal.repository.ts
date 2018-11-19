import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Index } from './models';
import { Search } from './models/search';
import { PioneerRevealLogQueryBuilder } from './pioneer-reveal-log-query-builder';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealRepository {
  url = 'http://localhost:9200';

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private http: HttpClient) { }

  getIndices(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.url}/_cat/indices?format=json`);
  }

  getLogs(index: string): Observable<Search> {
    if (index.length < 1) {
      return of({ hits: { hits: [] } } as Search);
    }
    return this.http.post<Search>(`${this.url}/${index}/_search?format=json`, { query: this.queryBuilder.query });
  }
}
