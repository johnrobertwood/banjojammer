import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ModuleNames, ModuleObject, Technique } from './technique';
import { ErrorHandlingService } from '../error-handling.service';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  apiGatewayUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production';

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  getTechniques(moduleName: string | null): Observable<Technique[]> {
    const data = { moduleName };

    return this.http
      .post<Technique[]>(
        `${this.apiGatewayUrl}/techniques`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.ehs.handleError<Technique[]>('getTechniques', [])));
  }

  getAllTechniques(): Observable<ModuleObject[]> {
    return this.http
      .get<ModuleObject[]>(`${this.apiGatewayUrl}/techniques`)
      .pipe(
        catchError(this.ehs.handleError<ModuleObject[]>('getAllTechniques', []))
      );
  }

  getModules(): Observable<ModuleNames[]> {
    return this.http
      .get<ModuleNames[]>(`${this.apiGatewayUrl}/modules`)
      .pipe(catchError(this.ehs.handleError<ModuleNames[]>('getModules', [])));
  }

  getUserFilterTechnique(
    moduleName: string | null,
    techName: string | null
  ): Observable<Technique> {
    const url = `${this.apiGatewayUrl}/user-filter`;
    const data = { moduleName, techName };
    return this.http
      .post<Technique>(url, data, this.httpOptions)
      .pipe(
        catchError(this.ehs.handleError<Technique>('getUserFilterTechnique'))
      );
  }

  updateTechnique(
    technique: Technique,
    quizType: string
  ): Observable<Technique> | Observable<null> {
    const currentUser = <string>JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser !== null) {
      const data = {
        currentUser,
        technique,
        quizType,
      };
      return this.http
        .patch<Technique>(`${this.apiGatewayUrl}/user`, data, this.httpOptions)
        .pipe(
          tap((x) => console.log(x)),
          catchError(this.ehs.handleError<Technique>('updateTechnique'))
        );
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
    const url = `${this.apiGatewayUrl}/technique`;

    return this.http
      .patch<Technique>(url, data, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<Technique>('editTechnique')));
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
