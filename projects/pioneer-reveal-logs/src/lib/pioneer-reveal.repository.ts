import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Index } from './models';
import { SearchResponse } from './models/response/search-response';
import { SearchRequest } from './models/request/search-request';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealRepository {
  url = 'http://localhost:9200';

  constructor(private http: HttpClient) { }

  getIndices(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.url}/_cat/indices?format=json`);
  }

  getLogs(index: string, request: SearchRequest): Observable<SearchResponse> {
    if (index.length < 1) {
      return of({ hits: { hits: [] } } as SearchResponse);
    }
    return this.http.post<SearchResponse>(`${this.url}/${index}/_search?format=json`, request);
  }
}
