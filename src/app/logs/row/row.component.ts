import { Component, Input } from '@angular/core';
import { Hit, IndexTypeEnum } from '../models/response/hits';
import { LogsService } from '../logs.service';

/**
 * Individual row in log table
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: '[logs-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent {
  @Input() log: Hit;

  /**
   * Parent will mark this true when user expands this row.
   */
  @Input() active = false;


  /**
   * Local cache so we can use this in the template.
   */
  public IndexTypeEnum = IndexTypeEnum;

  constructor(private logsService: LogsService) { }

  onExpandRowSelected() {
    this.log.pioneerRevelTracking.selected = !this.log.pioneerRevelTracking.selected;
    if (this.log.pioneerRevelTracking.selected) {
      this.logsService.addCurrentRowsOpenId(this.log._source.Id);
    } else {
      this.logsService.removeCurrentRowsOpenId(this.log._source.Id);
    }
  }
}
