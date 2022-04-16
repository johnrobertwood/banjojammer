import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private feedbackUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/feedback';

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  sendFeedback(message: string) {
    const feedback = { message };
    return this.http
      .post(this.feedbackUrl, feedback, this.httpOptions)
      .pipe(catchError(this.ehs.handleError('send feedback', [])));
  }
}
