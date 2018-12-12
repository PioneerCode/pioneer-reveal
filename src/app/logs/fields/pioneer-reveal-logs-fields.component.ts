import { Component } from '@angular/core';
import { PioneerRevealLogService } from '../logs.service';
import { StateService } from '../state.service';
import { Property } from '../models/key-value';

/**
 * Allow user to select Pioneer Log fields from sidebar
 * and have the row associated values show up in table.
 */
@Component({
  selector: 'pioneer-reveal-logs-fields',
  templateUrl: './pioneer-reveal-logs-fields.component.html',
  styleUrls: ['./pioneer-reveal-logs-fields.component.scss']
})
export class PioneerRevealLogsFieldsComponent {
  constructor(public stateService: StateService,
    public logService: PioneerRevealLogService
  ) { }

  onFieldClicked(field: Property): void {
    this.logService.currentFieldsSelected[field.key] = !this.logService.currentFieldsSelected[field.key];
  }
}
