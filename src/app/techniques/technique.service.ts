import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';

import { Technique } from './technique';
import { MessageService } from 'src/app/message.service';

@Injectable({ providedIn: 'root' })
export class TechniqueService {
  private techniquesUrl = 'api/techniques';
  private lambdaUrl =
    'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getTechniques(): Observable<Technique[]> {
    this.messageService.add(`TechniqueService: fetched techniques`);
    return this.http.get<Technique[]>(this.techniquesUrl).pipe(
      tap((_) => this.log('fetched techniques')),
      catchError(this.handleError<Technique[]>('getTechniques', []))
    );
  }

  getTechnique(id: number): Observable<Technique> {
    const url = `${this.techniquesUrl}/${id}`;
    this.messageService.add(`TechniqueService: fetched technique id=${id}`);
    return this.http.get<Technique>(url).pipe(
      tap((_) => this.log(`fetched technique id=${id}`)),
      catchError(this.handleError<Technique>('getTechnique'))
    );
  }

  getUserTechnique(techniqueId: number): Observable<any> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const username = { username: currentUser.username.toLowerCase() };
    const url = this.lambdaUrl;

    this.messageService.add(
      `TechniqueService: fetched technique id=${techniqueId}`
    );
    return this.http.post<any>(url, username, this.httpOptions).pipe(
      map((data) => JSON.parse(data.body)),
      pluck('techniques'),
      map((technique) => {
        return technique.filter((t) => t.id === techniqueId);
      }),
      map((technique) => (technique ? technique[0] : null)),
      catchError(this.handleError<Technique>('getTechnique'))
    );
  }

  updateTechnique(technique: Technique): Observable<Technique> {
    return this.http.put(this.techniquesUrl, technique, this.httpOptions).pipe(
      // tap((_) => console.log(`updated technique id=${technique.id}`)),
      catchError(this.handleError<any>('updateTechnique'))
    );
  }

  /** POST: add a new technique to the server */
  addTechnique(technique: Technique): Observable<Technique> {
    return this.http
      .post<Technique>(this.techniquesUrl, technique, this.httpOptions)
      .pipe(
        tap((newTechnique: Technique) =>
          this.log(`added technique w/ id=${newTechnique.id}`)
        ),
        catchError(this.handleError<Technique>('addTechnique'))
      );
  }

  /** DELETE: delete the technique from the server */
  deleteTechnique(technique: Technique | number): Observable<Technique> {
    const id = typeof technique === 'number' ? technique : technique.id;
    const url = `${this.techniquesUrl}/${id}`;

    return this.http.delete<Technique>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted technique id=${id}`)),
      catchError(this.handleError<Technique>('deleteTechnique'))
    );
  }

  /* GET techniques that contains search term */
  searchTechniques(term: string): Observable<Technique[]> {
    if (!term.trim()) {
      // if not search term, return empty technique array.
      return of([]);
    }
    return this.http
      .get<Technique[]>(`${this.techniquesUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`found techniques matching "${term}"`)
            : this.log(`no techniques matching "${term}"`)
        ),
        catchError(this.handleError<Technique[]>('searchTechniques', []))
      );
  }

  favoriteTechnique(technique: Technique): Observable<Technique> {
    technique.favorite = !technique.favorite;
    return this.http.put(this.techniquesUrl, technique, this.httpOptions).pipe(
      tap((_) => this.log(`updated favorite for technique id=${technique.id}`)),
      catchError(this.handleError<any>('favoriteTechnique error'))
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
