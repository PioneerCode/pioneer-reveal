import { Component } from '@angular/core';
import { StateService } from './logs/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reVeal: Pioneer Logs';

  constructor(public stateService: StateService) {
  }
}
