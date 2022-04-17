import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Technique } from './technique';
import { ErrorHandlingService } from '../error-handling.service';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiGatewayUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production';

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  getTechniques(moduleName: string): Observable<Technique[]> {
    const data = { moduleName };

    return this.http
      .post<any>(`${this.apiGatewayUrl}/modules`, data, this.httpOptions)
      .pipe(
        map((res) => {
          const obj = res.techniques;
          const arr = [];
          for (const key in obj) {
            if (obj[key]) {
              arr.push(obj[key]);
            }
          }
          arr.sort((a, b) => a.id - b.id);
          return arr;
        }),
        catchError(this.ehs.handleError<Technique[]>('getTechniques', []))
      );
  }

  getUserTechnique(
    moduleName: string,
    techName: string
  ): Observable<Technique> {
    const url = `${this.apiGatewayUrl}/modules`;
    const data = { moduleName };

    return this.http.post<any>(url, data, this.httpOptions).pipe(
      map((res) => {
        const technique = res.techniques;
        return technique[
          Object.keys(technique).filter(
            (t) => technique[t].name === techName
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
  // deleteTechnique(technique: Technique | number): Observable<Technique> {
  //   const id = typeof technique === 'number' ? technique : technique.name;
  //   const url = `${this.apiGatewayUrl}/user/${id}`;
  //   return this.http
  //     .delete<Technique>(url, this.httpOptions)
  //     .pipe(catchError(this.ehs.handleError<Technique>('deleteTechnique')));
  // }

  /* GET techniques that contains search term */
  // searchTechniques(term: string): Observable<Technique[]> {
  //   const url = `${this.apiGatewayUrl}/user/?name=${term}`;
  //   if (!term.trim()) {
  //     // if not search term, return empty technique array.
  //     return of([]);
  //   }
  //   return this.http.get<Technique[]>(url).pipe(
  //     // tap((x) =>
  //     //   x.length
  //     //     ? this.log(`found techniques matching "${term}"`)
  //     //     : this.log(`no techniques matching "${term}"`)
  //     // ),
  //     catchError(this.ehs.handleError<Technique[]>('searchTechniques', []))
  //   );
  // }
}
