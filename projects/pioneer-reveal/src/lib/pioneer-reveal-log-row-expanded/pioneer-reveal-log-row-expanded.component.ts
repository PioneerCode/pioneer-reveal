import { Component, OnInit, Input } from '@angular/core';

import { Hit } from '../models/search';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-log-row-expanded]',
  templateUrl: './pioneer-reveal-log-row-expanded.component.html',
  styleUrls: ['./pioneer-reveal-log-row-expanded.component.scss']
})
export class PioneerRevealLogRowExpandedComponent implements OnInit {
  @Input() log: Hit;

  constructor() { }

  ngOnInit() {
  }

}
