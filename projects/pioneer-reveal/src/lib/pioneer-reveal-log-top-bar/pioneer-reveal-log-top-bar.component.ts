import { Component, OnInit } from '@angular/core';
import { PioneerRevealLogService } from '../pioneer-reveal-log.service';

@Component({
  selector: 'pioneer-reveal-log-top-bar',
  templateUrl: './pioneer-reveal-log-top-bar.component.html',
  styleUrls: ['./pioneer-reveal-log-top-bar.component.scss']
})
export class PioneerRevealLogTopBarComponent implements OnInit {

  public showExpanded: string;

  constructor(public logService: PioneerRevealLogService) { }

  ngOnInit() {
  }

}
