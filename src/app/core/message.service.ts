import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string;

  private messageAddedSource = new Subject<string>();

  messageSource$ = this.messageAddedSource.asObservable();

  add(message: string) {
    this.messages = message;
    this.messageAddedSource.next(this.messages);
  }

  clear() {
    this.messages = null;
  }
}
