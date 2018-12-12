import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, IToken, ILoginRequest } from './user';
import { AuthenticationRepository } from './authentication.repository';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isBusy = false;

  constructor(
    private authRepository: AuthenticationRepository,
    private router: Router
  ) { }

  login(model: ILoginRequest, returnUrl: string) {
    this.isBusy = true;
    return this.authRepository.login(model)
      .subscribe((resp: IUser) => {
        this.setCurrentToken({
          session_id: resp.token
        } as IToken);
        this.isBusy = false;
        this.router.navigateByUrl(returnUrl);
      });
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
