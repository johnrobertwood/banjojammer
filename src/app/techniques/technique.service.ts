import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Technique } from './technique';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  private lambdaUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/user';

  private favoriteUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/favorite';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getTechniques(): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = {
      username: currentUser
        ? currentUser.username.toLowerCase()
        : 'testuser420',
    };
    return this.http
      .post(this.lambdaUrl, username, this.httpOptions)
      .pipe(catchError(this.handleError<Technique[]>('getTechniques', [])));
  }

  getUserTechnique(techniqueId: number): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = {
      username: currentUser
        ? currentUser.username.toLowerCase()
        : 'testuser420',
    };
    const url = this.lambdaUrl;

    return this.http.post<any>(url, username, this.httpOptions).pipe(
      map((data) => JSON.parse(data.body).techniques),
      map((technique) => {
        return technique[
          Object.keys(technique).filter(
            (t) => technique[t].id === techniqueId
          )[0]
        ];
      }),
      catchError(this.handleError<Technique>('getUserTechnique'))
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
        .patch(this.lambdaUrl, data, this.httpOptions)
        .pipe(catchError(this.handleError<any>('updateTechnique')));
    } else {
      return of(null);
    }
  }

  favoriteTechnique(technique: Technique): Observable<Technique> {
    technique.favorite = !technique.favorite;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser !== null) {
      const data = {
        currentUser,
        technique,
      };

      return this.http
        .patch(this.favoriteUrl, data, this.httpOptions)
        .pipe(catchError(this.handleError<any>('favoriteTechnique error')));
    } else {
      return of(null);
    }
  }

  /** POST: add a new technique to the server */
  addTechnique(technique: Technique): Observable<Technique> {
    return this.http
      .post<Technique>(this.lambdaUrl, technique, this.httpOptions)
      .pipe(catchError(this.handleError<Technique>('addTechnique')));
  }

  /** DELETE: delete the technique from the server */
  deleteTechnique(technique: Technique | number): Observable<Technique> {
    const id = typeof technique === 'number' ? technique : technique.id;
    const url = `${this.lambdaUrl}/${id}`;

    return this.http
      .delete<Technique>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Technique>('deleteTechnique')));
  }

  /* GET techniques that contains search term */
  searchTechniques(term: string): Observable<Technique[]> {
    if (!term.trim()) {
      // if not search term, return empty technique array.
      return of([]);
    }
    return this.http.get<Technique[]>(`${this.lambdaUrl}/?name=${term}`).pipe(
      // tap((x) =>
      //   x.length
      //     ? this.log(`found techniques matching "${term}"`)
      //     : this.log(`no techniques matching "${term}"`)
      // ),
      catchError(this.handleError<Technique[]>('searchTechniques', []))
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
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
