import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, IToken, ILoginRequest } from '../user';
import { PioneerRevealRepository } from './pioneer-reveal.repository';
import { StateService } from '../logs/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  get isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  constructor(
    private revealRepository: PioneerRevealRepository,
    private router: Router,
    private stateService: StateService
  ) { }

  login(model: ILoginRequest, returnUrl: string) {
    this.stateService.isLoading = true;
    this.revealRepository.login(model)
      .subscribe((resp: IUser) => {
        if (resp != null) {
          this.setCurrentToken({
            token: resp.token
          } as IToken);
          this.router.navigateByUrl(returnUrl);
        }
        this.stateService.isLoading = false;
      });
  }

  getCurrentToken(): IToken {
    return JSON.parse(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }

  private setCurrentToken(token: IToken): void {
    localStorage.setItem('token', JSON.stringify(token));
  }
}
