import { Component, OnInit, Input } from '@angular/core';
import { Hit } from '../models/response/hits';
import { PioneerRevealLogService } from '../logs.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-logs-row-fields]',
  templateUrl: './pioneer-reveal-logs-row-fields.component.html',
  styleUrls: ['./pioneer-reveal-logs-row-fields.component.scss']
})
export class PioneerRevealLogsRowFieldsComponent implements OnInit {
  @Input() log: Hit;

  constructor(public logService: PioneerRevealLogService) { }

  ngOnInit() {
  }
}
