import { Component, OnInit } from '@angular/core';

import { LogsService } from '../logs.service';
import { StateService } from '../state.service';
import { PioneerRevealRepository } from 'src/app/core/pioneer-reveal.repository';
import { Bucket, Aggregations, Aggregation } from 'src/app/core/models/response/aggregations';
import { SearchResponse } from 'src/app/core/models/response/search-response';
import { SearchRequest } from 'src/app/core/models/request/search-request';
import { PioneerRevealLogQueryBuilder } from '../query-builder';
import { Sort } from 'src/app/core/models/request/sort';
import { pioneerLogsIndices } from 'src/app/core/models';

/**
 * Filters logs by ApplicationName and ApplicationLayer
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logs-application-aggregation',
  templateUrl: './application-aggregation.component.html',
  styleUrls: ['./application-aggregation.component.scss']
})
export class ApplicationAggregationComponent implements OnInit {
  get applications(): Bucket[] {
    return this.searchResponse.aggregations.group_by_ApplicationName.buckets;
  }

  public layers = [] as string[];
  private searchResponse: SearchResponse;
  private request = new SearchRequest();

  constructor(
    public stateService: StateService,
    private logsService: LogsService,
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
    const keyValue = 'ApplicationName';
    if (this.queryBuilder.isCurrentFilter({ key: keyValue, value: application })) {
      this.queryBuilder.removeFilter(keyValue, application, false);
    } else {
      this.queryBuilder.addFilter(keyValue, application, false);
    }
    this.logsService.getLogs();
  }

  onLayerClick(layer: string): void {
    const keyValue = 'ApplicationLayer';
    if (this.queryBuilder.isCurrentFilter({ key: keyValue, value: layer })) {
      this.queryBuilder.removeFilter(keyValue, layer, false);
    } else {
      this.queryBuilder.addFilter(keyValue, layer, false);
    }
    this.logsService.getLogs();
  }
}
