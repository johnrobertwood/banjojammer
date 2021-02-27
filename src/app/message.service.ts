import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  constructor(private http: HttpClient) {}

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
      .pipe(catchError(this.handleError('send feedback', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
