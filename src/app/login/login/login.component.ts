import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { StateService } from 'src/app/logs/state.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl({value: null, disabled: this.stateService.isLoading}),
    password: new FormControl({value: null, disabled: this.stateService.isLoading})
  });

  constructor(
    public stateService: StateService,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value, 'logs');
  }
}
