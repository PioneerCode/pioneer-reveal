import { Component, OnInit } from '@angular/core';
import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { SearchResponse } from '../models/response/search-response';
import { pioneerLogsIndices } from '../models';
import { SearchRequest } from '../models/request/search-request';
import { Aggregations, Bucket, Aggregation } from '../models/response/aggregations';

/**
 * Filters logs by ApplicationName and ApplicationLayer
 */
@Component({
  selector: 'pioneer-reveal-logs-application-aggregation',
  templateUrl: './pioneer-reveal-logs-application-aggregation.component.html',
  styleUrls: ['./pioneer-reveal-logs-application-aggregation.component.scss']
})
export class PioneerRevealLogsApplicationAggregationComponent implements OnInit {

  get applications(): Bucket[] {
    return this.searchResponse.aggregations.group_by_ApplicationName.buckets;
  }

  get layers(): string[] {
    const layers = [] as string[];
    this.applications.forEach(application => {
      application.group_by_ApplicationLayer.buckets.forEach(element => {
        layers.push(element.key);
      });
    });
    return layers;
  }

  private searchResponse: SearchResponse;
  private request = {
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
  ) {
    this.searchResponse = new SearchResponse();
    this.searchResponse.aggregations = new Aggregations();
    this.searchResponse.aggregations.group_by_ApplicationName = new Aggregation();
  }

  ngOnInit() {
    let indices = '';
    pioneerLogsIndices.forEach(index => {
      indices = `${indices}${index},`;
    });
    this.pioneerRevealRepository.getLogs(indices.slice(0, -1), this.request)
      .subscribe((response) => {
        this.searchResponse = response;
      });
  }
}
