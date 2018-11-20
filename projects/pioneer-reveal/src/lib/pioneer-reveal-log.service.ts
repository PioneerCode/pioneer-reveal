import { Injectable } from '@angular/core';
import { PioneerRevealRepository } from './pioneer-reveal.repository';
import { PioneerRevealLogQueryBuilder } from './pioneer-reveal-log-query-builder';
import { Hit, Search } from './models/search';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealLogService {
  searchResponse: Search;
  logs = [] as Hit[];

  constructor(
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository) { }

  getLogs() {
    return this.pioneerRevealRepository.getLogs(this.queryBuilder.currentSearchIndices)
      .subscribe((logs) => {
        this.logs = [] as Hit[];
        this.logs = logs.hits.hits.map(x => new Hit(x));
      });
  }
}
