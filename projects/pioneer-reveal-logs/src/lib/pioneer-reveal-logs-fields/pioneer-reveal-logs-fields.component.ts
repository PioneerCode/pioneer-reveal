import { Component } from '@angular/core';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';
import { StateService } from '../state.service';
import { Property } from '../models/key-value';

@Component({
  selector: 'pioneer-reveal-logs-fields',
  templateUrl: './pioneer-reveal-logs-fields.component.html',
  styleUrls: ['./pioneer-reveal-logs-fields.component.scss']
})
export class PioneerRevealLogsFieldsComponent {

  constructor(
    public stateService: StateService,
    public logService: PioneerRevealLogService) { }

  onFieldClicked(field: Property): void {
    field.isFieldSelected = !field.isFieldSelected;
  }
}
