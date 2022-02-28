import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling.service';
import { Technique } from '../techniques/technique';

import basicTechniques from './basic-techniques';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  userData: any;

  techniques: { [key: string]: object } = basicTechniques;

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

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

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
    localStorage.removeItem('currentUser');
  }

  checkLocalStorage() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  addUser(payload: any): Observable<any> {
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
      .post<any>(url, data, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<any>('addUser HTTP post error')));
  }

  addTechniques(user: string): Observable<any> {
    const data = {
      user,
      techniques: this.techniques,
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/technique';
    return this.http
      .post<any>(url, data, this.httpOptions)
      .pipe(
        catchError(this.ehs.handleError<any>('addTechniques HTTP post error'))
      );
  }

  updateTechnique(technique: Technique, saveType: string): Observable<any> {
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/favorite';

    const found = this.userHistory[saveType].find((t) => {
      return t.name === technique.name;
    });
    if (found) {
      this.userHistory[saveType] = this.userHistory[saveType].filter((tech) => {
        return tech.name !== technique.name;
      });
    } else {
      this.userHistory[saveType].push(technique);
    }

    const data = {
      username: this.userData.username,
      userHistory: this.userHistory,
    };

    return this.http
      .patch<any>(url, data, this.httpOptions)
      .pipe(
        catchError(
          this.ehs.handleError<any>('favoriteTechnique HTTP patch error')
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
      tap((user) => (this.userHistory = user.userHistory)),
      catchError(this.ehs.handleError<any>('getUserHistory HTTP get error'))
    );
  }
}
