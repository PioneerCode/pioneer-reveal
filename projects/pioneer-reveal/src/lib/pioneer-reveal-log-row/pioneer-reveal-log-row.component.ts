import { Component, OnInit, Input } from '@angular/core';
import { Hit } from '../models/search';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[pioneer-reveal-log-row]',
  templateUrl: './pioneer-reveal-log-row.component.html',
  styleUrls: ['./pioneer-reveal-log-row.component.scss']
})
export class PioneerRevealLogRowComponent implements OnInit {
  @Input() log: Hit;

  constructor() { }

  ngOnInit() {
  }
}
