import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

import { PioneerLogsLoggingService } from 'src/app/pioneer-logs-logging.service';
import { environment } from '../../environments/environment';
import { Index } from './models';
import { SearchRequest } from './models/request/search-request';
import { SearchResponse } from './models/response/search-response';
import { MessageService } from './message.service';
import { ILoginRequest, IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealRepository {

  private httpOptions = {
    withCredentials: true,
  };

  url = environment.elasticsearchUrl;

  constructor(
    private loggingService: PioneerLogsLoggingService,
    private messageService: MessageService,
    private http: HttpClient) { }

  login(model: ILoginRequest): Observable<IUser> {

    return this.http.post<IUser>(`${environment.elasticsearchUrl}/authenticate`, model)
      .pipe(
        catchError(this.handleError('login', null, 'Login Failed'))
      );
  }

  getIndices(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.url}/_cat/indices?format=json`)
      .pipe(
        catchError(this.handleError('getIndices', null, 'Oops! We are having trouble getting your data.'))
      );
  }

  getLogs(index: string, request: SearchRequest): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(`${this.url}/${index}/_search?format=json`, request)
      .pipe(
        catchError(this.handleError('getLogs', null, 'Oops! We are having trouble getting your data.'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T, message?: string) {
    return (error: any): Observable<T> => {
      // Send the error to remote logging infrastructure
      // this.loggingService.handleApiError(operation, error);

      // Better job of transforming error for user consumption
      if (message) {
        this.messageService.add(message);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
