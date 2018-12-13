import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './core/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentToken = this.authenticationService.getCurrentToken();
    if (currentToken && currentToken.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentToken.token}`
        }
      });
    }
    return next.handle(req);
  }
}
