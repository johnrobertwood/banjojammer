import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Quiz } from './quiz';
import { MessageService } from './message.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private quizzesUrl = 'api/quizzes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getQuiz(id: number): Observable<Quiz> {
    const url = `${this.quizzesUrl}/${id}`;
    this.messageService.add(`QuizService: fetched quiz id=${id}`);
    return this.http.get<Quiz>(url).pipe(
      tap((_) => this.log(`fetched technique id=${id}`)),
      catchError(this.handleError<Quiz>('getTechnique'))
    );
  }

  // updateQuiz(quiz: Quiz): Observable<Quiz> {
  //   console.log('update quiz in service now');
  //   return this.http.put(this.quizzesUrl, quiz, this.httpOptions).pipe(
  //     tap((_) => this.log(`updated quiz id=${quiz.id}`)),
  //     catchError(this.handleError<any>('updateQuiz'))
  //   );
  // }

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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TechniqueService: ${message}`);
  }
}
