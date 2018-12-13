import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, IToken, ILoginRequest } from './user';
import { PioneerRevealRepository } from './core/pioneer-reveal.repository';
import { StateService } from './logs/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private revealRepository: PioneerRevealRepository,
    private router: Router,
    private stateService: StateService
  ) { }

  login(model: ILoginRequest, returnUrl: string) {
    this.stateService.isLoading = true;
    this.revealRepository.login(model)
      .subscribe(
        (resp: IUser) => {
          this.setCurrentToken({
            token: resp.token
          } as IToken);
          this.stateService.isLoading = false;
          this.router.navigateByUrl(returnUrl);
        },
        () => this.stateService.isLoading = false
      );
  }

  private setCurrentToken(token: IToken): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getCurrentToken(): IToken {
    return JSON.parse(localStorage.getItem('token'));
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
