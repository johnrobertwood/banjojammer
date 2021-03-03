import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private feedbackUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/feedback';
  messages: string[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  sendFeedback(message: string) {
    const feedback = { message };
    return this.http
      .post(this.feedbackUrl, feedback, this.httpOptions)
      .pipe(catchError(this.ehs.handleError('send feedback', [])));
  }
}
