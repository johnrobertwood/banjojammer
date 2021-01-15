import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  // redirectUrl: string;
  userData: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  login(payload: any) {
    this.userData = payload.data;
    this.isLoggedIn = true;
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        userId: payload.data.attributes.sub,
        username: payload.data.username,
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
  }

  addUser(payload: any): Observable<any> {
    const user = {
      userId: payload.data.userSub,
      username: payload.data.user.username,
      techniques: [
        {
          id: 11,
          name: 'Armbar',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 12,
          name: 'Triangle',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 13,
          name: 'Kimura',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 14,
          name: 'Rear Naked Choke',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 15,
          name: 'Omoplata',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 16,
          name: 'Guillotine',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 17,
          name: 'Head and Arm Choke',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 18,
          name: 'Americana',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 19,
          name: 'Straight Armlock',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
        {
          id: 20,
          name: 'Straight Kneebar',
          favorite: false,
          quizzed: false,
          flashcarded: false,
        },
      ],
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/users';
    return this.http.post<any>(url, user, this.httpOptions).pipe(
      tap((_) => console.log(_)),
      catchError(this.handleError<any>('addUser HTTP post error'))
    );
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TechniqueService message with the TechniqueMessage */
  private log(message: string) {
    this.messageService.add(`TechniqueService: ${message}`);
  }
}
