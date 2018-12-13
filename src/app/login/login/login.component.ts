import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { StateService } from 'src/app/logs/state.service';
import { MessageService } from 'src/app/core/message.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    public stateService: StateService,
    private authService: AuthenticationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.authService.logout();
    }
    this.messageService.clear();
  }

  onSubmit() {
    this.authService.login(this.loginForm.value, 'logs');
  }
}
