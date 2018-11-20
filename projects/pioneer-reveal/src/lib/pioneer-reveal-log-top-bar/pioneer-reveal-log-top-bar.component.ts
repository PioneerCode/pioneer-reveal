import { Component } from '@angular/core';
import { PioneerRevealLogService } from '../pioneer-reveal-log.service';

@Component({
  selector: 'pioneer-reveal-log-top-bar',
  templateUrl: './pioneer-reveal-log-top-bar.component.html',
  styleUrls: ['./pioneer-reveal-log-top-bar.component.scss']
})
export class PioneerRevealLogTopBarComponent {

  public selectedOption: string;

  constructor(public logService: PioneerRevealLogService) { }

  optionClick(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = null;
    } else {
      this.selectedOption = option;
    }
  }
}
