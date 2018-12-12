import { Component, OnInit, Input } from '@angular/core';
import { LogsService } from '../logs.service';
import { Hit } from 'src/app/core/models/response/hits';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[logs-row-fields]',
  templateUrl: './row-fields.component.html',
  styleUrls: ['./row-fields.component.scss']
})
export class RowFieldsComponent implements OnInit {
  @Input() log: Hit;

  constructor(public logService: LogsService) { }

  ngOnInit() {
  }
}
