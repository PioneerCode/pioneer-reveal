import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value, 'login');
  }
}
