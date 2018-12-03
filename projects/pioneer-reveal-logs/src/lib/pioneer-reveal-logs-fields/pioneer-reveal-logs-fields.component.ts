import { Component } from '@angular/core';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

@Component({
  selector: 'pioneer-reveal-logs-fields',
  templateUrl: './pioneer-reveal-logs-fields.component.html',
  styleUrls: ['./pioneer-reveal-logs-fields.component.scss']
})
export class PioneerRevealLogsFieldsComponent {

  constructor(public logService: PioneerRevealLogService) { }
}
