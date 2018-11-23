import { Component, OnInit } from '@angular/core';
import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { SearchResponse } from '../models/search-response';
import { pioneerLogsIndices } from '../models';
import { SearchRequest } from '../models/search-request';

/**
 * Filters logs by ApplicationName and ApplicationLayer
 */
@Component({
  selector: 'pioneer-reveal-logs-application-aggregation',
  templateUrl: './pioneer-reveal-logs-application-aggregation.component.html',
  styleUrls: ['./pioneer-reveal-logs-application-aggregation.component.scss']
})
export class PioneerRevealLogsApplicationAggregationComponent implements OnInit {
  public aggregations: SearchResponse;
  public request = {
    size: 0,
    aggs: {
      group_by_ApplicationName: {
        terms: {
          field: 'ApplicationName'
        },
        aggs: {
          group_by_ApplicationLayer: {
            terms: {
              field: 'ApplicationLayer'
            }
          }
        }
      }
    }
  } as SearchRequest;

  constructor(
    private pioneerRevealRepository: PioneerRevealRepository,
  ) { }

  ngOnInit() {
    let indices = '';
    pioneerLogsIndices.forEach(index => {
      indices = `${indices}${index},`;
    });
    this.pioneerRevealRepository.getLogs(indices.slice(0, -1), this.request)
      .subscribe((response) => {
        this.aggregations = response;
        console.log(this.aggregations);
      });
  }
}
