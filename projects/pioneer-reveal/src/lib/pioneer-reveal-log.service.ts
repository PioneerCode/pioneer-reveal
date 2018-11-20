import { Injectable } from '@angular/core';
import { PioneerRevealRepository } from './pioneer-reveal.repository';
import { PioneerRevealLogQueryBuilder } from './pioneer-reveal-log-query-builder';
import { Hit, SearchResponse } from './models/search-response';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogService {
  searchResponse: SearchResponse;
  logs = [] as Hit[];

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository) { }

  getLogs() {
    return this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices, this.queryBuilder.searchRequest)
      .subscribe((searchResponse) => {
        this.searchResponse = searchResponse;
        this.logs = [] as Hit[];
        this.logs = searchResponse.hits.hits.map(x => new Hit(x));
      });
  }
}
