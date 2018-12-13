import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/core/authentication.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}
