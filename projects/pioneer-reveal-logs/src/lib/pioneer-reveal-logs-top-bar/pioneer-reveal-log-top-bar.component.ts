import { Component } from '@angular/core';
import * as moment from 'moment';

import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';
import { KeyValue } from '../models/key-value';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';

@Component({
  selector: 'pioneer-reveal-log-top-bar',
  templateUrl: './pioneer-reveal-log-top-bar.component.html',
  styleUrls: ['./pioneer-reveal-log-top-bar.component.scss']
})
export class PioneerRevealLogTopBarComponent {
  public timeRanges = this.getTimeRanges();
  public refreshRates = this.getRefreshRates();
  public selectedOption: string;
  public selectedTimeRange: string;

  constructor(private queryBuilder: PioneerRevealLogQueryBuilder,
    public logService: PioneerRevealLogService) {
    this.selectedTimeRange = this.timeRanges[0].key;
    this.logService.refreshRate = this.refreshRates[2];
  }

  onOptionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = null;
    } else {
      this.selectedOption = option;
    }
  }

  onRangeClick(range: KeyValue) {
    this.selectedTimeRange = range.key;
    this.queryBuilder.addTimeRange(range.value);
  }

  onRateClick(rate: KeyValue) {
    this.logService.refreshRate = rate;
  }

  private getTimeRanges(): KeyValue[] {
    return [
      {
        key: 'Today',
        value: moment().startOf('day')
      },
      {
        key: 'This week',
        value: moment().startOf('week')
      },
      {
        key: 'This month',
        value: moment().startOf('month')
      },
      {
        key: 'Past 15 minutes',
        value: moment().subtract(15, 'minutes')
      },
      {
        key: 'Past 30 minutes',
        value: moment().subtract(30, 'minutes')
      },
      {
        key: 'Past 1 hour',
        value: moment().subtract(1, 'hour')
      },
      {
        key: 'Past 12 hours',
        value: moment().subtract(12, 'hour')
      },
      {
        key: 'Past 30 days',
        value: moment().subtract(30, 'day')
      },
    ] as KeyValue[];
  }

  private getRefreshRates(): KeyValue[] {
    return [
      {
        key: '5 seconds',
        value: 5
      },
      {
        key: '15 seconds',
        value: 15
      },
      {
        key: '30 seconds',
        value: 30
      },
      {
        key: '1 minute',
        value: 60
      },
      {
        key: '15 minutes',
        value: 900
      },
      {
        key: '30 minutes',
        value: 1800
      },
      {
        key: '1 hour',
        value: 3600
      },
      {
        key: 'Pause',
        value: 'Paused'
      }
    ] as KeyValue[];
  }
}
