import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Technique } from './technique';
import { ErrorHandlingService } from '../error-handling.service';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  private apiGatewayUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  getTechniques(): Observable<Technique[]> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = {
      username: currentUser
        ? currentUser.username.toLowerCase()
        : 'testuser420',
    };
    return this.http
      .post<any>(`${this.apiGatewayUrl}/user`, username, this.httpOptions)
      .pipe(
        map((data) => {
          const obj = JSON.parse(data.body).techniques;
          const arr = [];
          for (const key in obj) {
            if (obj[key]) {
              arr.push(obj[key]);
            }
          }
          arr.sort((a, b) => {
            return a.id - b.id;
          });
          return arr;
        }),
        catchError(this.ehs.handleError<Technique[]>('getTechniques', []))
      );
  }

  getUserTechnique(techniqueId: number): Observable<Technique> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = {
      username: currentUser
        ? currentUser.username.toLowerCase()
        : 'testuser420',
    };
    const url = `${this.apiGatewayUrl}/user`;

    return this.http.post<any>(url, username, this.httpOptions).pipe(
      map((data) => {
        const technique = JSON.parse(data.body).techniques;
        return technique[
          Object.keys(technique).filter(
            (t) => technique[t].id === techniqueId
          )[0]
        ];
      }),
      catchError(this.ehs.handleError<Technique>('getUserTechnique'))
    );
  }

  updateTechnique(
    technique: Technique,
    quizType: string
  ): Observable<Technique> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser !== null) {
      const data = {
        currentUser,
        technique,
        quizType,
      };
      return this.http
        .patch(`${this.apiGatewayUrl}/user`, data, this.httpOptions)
        .pipe(catchError(this.ehs.handleError<any>('updateTechnique')));
    } else {
      return of(null);
    }
  }

  editTechnique(technique: Technique): Observable<Technique> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const data = {
      currentUser,
      technique,
    };
    const url = `${this.apiGatewayUrl}/users`;

    return this.http
      .patch(url, data, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<any>('editTechnique')));
  }

  favoriteTechnique(technique: Technique): Observable<Technique> {
    technique.favorite = !technique.favorite;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const url = `${this.apiGatewayUrl}/favorite`;

    if (currentUser !== null) {
      const data = {
        currentUser,
        technique,
      };

      return this.http
        .patch(url, data, this.httpOptions)
        .pipe(catchError(this.ehs.handleError<any>('favoriteTechnique error')));
    } else {
      return of(null);
    }
  }

  /** POST: add a new technique to the server */
  addTechnique(technique: Technique): Observable<Technique> {
    return this.http
      .post<Technique>(
        `${this.apiGatewayUrl}/user`,
        technique,
        this.httpOptions
      )
      .pipe(catchError(this.ehs.handleError<Technique>('addTechnique')));
  }

  /** DELETE: delete the technique from the server */
  deleteTechnique(technique: Technique | number): Observable<Technique> {
    const id = typeof technique === 'number' ? technique : technique.id;
    const url = `${this.apiGatewayUrl}/user/${id}`;
    return this.http
      .delete<Technique>(url, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<Technique>('deleteTechnique')));
  }

  /* GET techniques that contains search term */
  searchTechniques(term: string): Observable<Technique[]> {
    const url = `${this.apiGatewayUrl}/user/?name=${term}`;
    if (!term.trim()) {
      // if not search term, return empty technique array.
      return of([]);
    }
    return this.http.get<Technique[]>(url).pipe(
      // tap((x) =>
      //   x.length
      //     ? this.log(`found techniques matching "${term}"`)
      //     : this.log(`no techniques matching "${term}"`)
      // ),
      catchError(this.ehs.handleError<Technique[]>('searchTechniques', []))
    );
  }
}
