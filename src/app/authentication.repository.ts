import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { IUser, ILoginRequest } from './user';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationRepository {

  constructor(
    private http: HttpClient
  ) { }

  login(model: ILoginRequest): Observable<IUser> {
    const options = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    return this.http.post<IUser>(`${environment.elasticsearchUrl}/authenticate`, model, options);
  }
}
