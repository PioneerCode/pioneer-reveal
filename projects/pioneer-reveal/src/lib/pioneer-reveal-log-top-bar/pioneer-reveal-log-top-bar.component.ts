import { Component } from '@angular/core';
import { PioneerRevealLogService } from '../pioneer-reveal-log.service';
import { KeyValue } from '../models/key-value';

@Component({
  selector: 'pioneer-reveal-log-top-bar',
  templateUrl: './pioneer-reveal-log-top-bar.component.html',
  styleUrls: ['./pioneer-reveal-log-top-bar.component.scss']
})
export class PioneerRevealLogTopBarComponent {
  public timeRanges = this.getTimeRanges();
  public refreshRates = this.getRefreshRates();
  public selectedOption: string;
  public selectedRange: string;
  public selectedRate: string;

  constructor(public logService: PioneerRevealLogService) { }

  onOptionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = null;
    } else {
      this.selectedOption = option;
    }
  }

  onRateClick(rate: KeyValue) {
    this.selectedRate = rate.key;
  }

  onRangeClick(range: KeyValue) {
    this.selectedRange = range.key;
  }

  private getTimeRanges(): KeyValue[] {
    return [
      {
        key: 'Today',
        value: 0
      },
      {
        key: 'This week',
        value: 1
      },
      {
        key: 'This month',
        value: 2
      },
      {
        key: 'Past 15 minutes',
        value: 3
      },
      {
        key: 'Past 30 minutes',
        value: 4
      },
      {
        key: 'Past 1 hour',
        value: 5
      },
      {
        key: 'Past 12 hours',
        value: 6
      },
      {
        key: 'Past 30 days',
        value: 7
      },
    ] as KeyValue[];
  }

  private getRefreshRates(): KeyValue[] {
    return [
      {
        key: '5 seconds',
        value: 0
      },
      {
        key: '15 seconds',
        value: 1
      },
      {
        key: '30 seconds',
        value: 2
      },
      {
        key: '1 minute',
        value: 3
      },
      {
        key: '15 minutes',
        value: 4
      },
      {
        key: '30 minutes',
        value: 5
      },
      {
        key: '1 hour',
        value: 6
      }
    ] as KeyValue[];
  }
}
