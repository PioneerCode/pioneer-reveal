import { Component } from '@angular/core';
import { LogsService } from '../logs.service';
import { StateService } from '../state.service';
import { Property } from '../models/key-value';

/**
 * Allow user to select Pioneer Log fields from sidebar
 * and have the row associated values show up in table.
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'logs-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent {
  constructor(public stateService: StateService,
    public logService: LogsService
  ) { }

  onFieldClicked(field: Property): void {
    this.logService.currentFieldsSelected[field.key] = !this.logService.currentFieldsSelected[field.key];
  }
}
