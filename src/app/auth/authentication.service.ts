/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  userData: any;

  userHistory = {
    flashcard: [],
    quiz: [],
    favorite: [],
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private ehs: ErrorHandlingService
  ) {}

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  login(payload: any): void {
    this.userData = payload.data;
    this.isLoggedIn = true;
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        userId: payload.data.attributes.sub,
        username: payload.data.username,
        email: payload.data.attributes.email,
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  checkLocalStorage(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addUser(payload: any): Observable<void> {
    const data = {
      userId: payload.data.userSub,
      username: payload.data.user.username.toLowerCase(),
      userHistory: {
        flashcard: [],
        quiz: [],
        favorite: [],
      },
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/users';
    return this.http
      .post<void>(url, data, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<void>('addUser HTTP post error')));
  }

  addModule(user: string): Observable<void> {
    const data = {
      user,
      techniques: {},
    };

    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/module';
    return this.http
      .post<any>(url, data, this.httpOptions)
      .pipe(
        catchError(this.ehs.handleError<void>('addModule HTTP post error'))
      );
  }

  addTechniques(tagForm: any, moduleName: any): Observable<void> {
    // tagForm.notes = [
    //   { text: tagForm.notes.note1 },
    //   { text: tagForm.notes.note2 },
    //   { text: tagForm.notes.note3 },
    //   { text: tagForm.notes.note4 },
    // ];

    tagForm.nextTechnique =
      tagForm.nextTechnique === '' ? null : tagForm.nextTechnique;
    tagForm.prevTechnique =
      tagForm.prevTechnique === '' ? null : tagForm.prevTechnique;

    // delete tagForm.notes.note1;
    // delete tagForm.notes.note2;
    // delete tagForm.notes.note3;
    // delete tagForm.notes.note4;

    const data = {
      user: moduleName,
      technique: tagForm,
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/technique';
    return this.http
      .post<void>(url, data, this.httpOptions)
      .pipe(
        catchError(this.ehs.handleError<void>('addTechniques HTTP post error'))
      );
  }

  updateTechnique(favArray: any) {
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/favorite';

    const data = {
      username: this.userData.username,
      userHistory: {
        favorite: favArray,
      },
    };

    return this.http
      .patch<void>(url, data, this.httpOptions)
      .pipe(
        catchError(
          this.ehs.handleError<void>('favoriteTechnique HTTP patch error')
        )
      );
  }

  getUserHistory() {
    const data = {
      username: this.userData.username,
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/user';
    return this.http.post<any>(url, data, this.httpOptions).pipe(
      tap((user) => {
        user ? (this.userHistory = user.userHistory) : null;
      }),
      catchError(this.ehs.handleError<any>('getUserHistory HTTP get error'))
    );
  }
}
