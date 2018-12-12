import { Component, OnInit, Input } from '@angular/core';
import { Hit } from '../models/response/hits';
import { PioneerRevealLogService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[logs-row-fields]',
  templateUrl: './row-fields.component.html',
  styleUrls: ['./row-fields.component.scss']
})
export class RowFieldsComponent implements OnInit {
  @Input() log: Hit;

  constructor(public logService: PioneerRevealLogService) { }

  ngOnInit() {
  }
}
