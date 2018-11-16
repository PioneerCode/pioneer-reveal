import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Index } from '../models';
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealRepository {
  url = 'http://localhost:9200';

  constructor(
    private http: HttpClient) { }

  getIndices(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.url}/_cat/indices?format=json`);
  }

  getLogs(index: string): Observable<Search> {
    return this.http.post<Search>(`${this.url}/${index}/_search?format=json`, {});
  }
}
