import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

import { PioneerLogsLoggingService } from 'src/app/pioneer-logs-logging.service';
import { MessageService } from 'src/app/message.service';
import { environment } from '../../environments/environment';
import { Index } from './models';
import { SearchRequest } from './models/request/search-request';
import { SearchResponse } from './models/response/search-response';

@Injectable({
  providedIn: 'root'
})
export class PioneerRevealRepository {
  url = environment.elasticsearchUrl;

  constructor(
    private loggingService: PioneerLogsLoggingService,
    private messageService: MessageService,
    private http: HttpClient) { }

  getIndices(): Observable<Index[]> {
    return this.http.get<Index[]>(`${this.url}/_cat/indices?format=json`)
      .pipe(
        catchError(this.handleError('getIndices', [] as Index[]))
      );
  }

  getLogs(index: string, request: SearchRequest): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(`${this.url}/${index}/_search?format=json`, request)
      .pipe(
        catchError(this.handleError('getLogs', {} as SearchResponse))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Send the error to remote logging infrastructure
      this.loggingService.handleApiError('Failed getting todo!', error);

      // Better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
