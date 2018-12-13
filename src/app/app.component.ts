import { Component } from '@angular/core';
import { StateService } from './logs/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from './core/message.service';
import { AuthenticationService } from './core/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reVeal: Pioneer Logs';

  constructor(public stateService: StateService,
    messageService: MessageService,
    private snackBar: MatSnackBar,
    public authService: AuthenticationService) {

    messageService.messageSource$.subscribe(
      message => {
        console.log(message);
        this.snackBar.open(message, 'X');
      });
  }
}
