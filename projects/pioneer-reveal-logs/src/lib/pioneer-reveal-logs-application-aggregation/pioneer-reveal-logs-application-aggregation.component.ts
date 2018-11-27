import { Component, OnInit } from '@angular/core';

import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { SearchResponse } from '../models/response/search-response';
import { pioneerLogsIndices } from '../models';
import { SearchRequest } from '../models/request/search-request';
import { Aggregations, Bucket, Aggregation } from '../models/response/aggregations';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';
import { Sort } from '../models/request/sort';

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

  public layers = [] as string[];
  private searchResponse: SearchResponse;
  private request = new SearchRequest();

  constructor(
    private logsService: PioneerRevealLogService,
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private pioneerRevealRepository: PioneerRevealRepository,
  ) {
    this.searchResponse = new SearchResponse();
    this.searchResponse.aggregations = new Aggregations();
    this.searchResponse.aggregations.group_by_ApplicationName = new Aggregation();
    this.searchResponse.aggregations.group_by_ApplicationName.buckets = [] as Bucket[];
    this.request.sort = new Sort();
    this.request.size = 0;
    this.request.aggs = {
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
    };
  }

  ngOnInit() {
    let indices = '';
    pioneerLogsIndices.forEach(index => {
      indices = `${indices}${index},`;
    });
    this.pioneerRevealRepository.getLogs(indices.slice(0, -1), this.request)
      .subscribe((response) => {
        this.searchResponse = response;
        this.layers = [];
        this.applications.forEach(application => {
          application.group_by_ApplicationLayer.buckets.forEach(element => {
            this.layers.push(element.key);
          });
        });
      });
  }

  onApplicationClick(application: string): void {
    this.queryBuilder.addFilter('ApplicationName', application);
    this.logsService.getLogs();
  }

  onLayerClick(layer: string): void {
    this.queryBuilder.addFilter('ApplicationLayer', layer);
    this.logsService.getLogs();
  }
}
