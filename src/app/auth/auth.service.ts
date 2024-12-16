import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

type TokenResponse = {
  token: string;
};

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN' | 'MANAGER';
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `https://banjojammer.com/api/auth`;
  // private apiUrl = 'http://localhost:8080/api/auth';
  private http = inject(HttpClient);
  private storageService = inject(StorageService);
  private router = inject(Router);

  login(email: string, password: string) {
    return this.http
      .post<TokenResponse>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.storageService._setToken(response.token);
          this.router.navigate(['/']);
        }),
        catchError((error) => {
          return throwError(
            () => new Error('Incorrect login, please try again.')
          );
        })
      );
  }

  register({ firstName, lastName, email, password, role }: RegisterRequest) {
    return this.http
      .post<TokenResponse>(`${this.apiUrl}/register`, {
        firstName,
        lastName,
        email,
        password,
        role,
      })
      .pipe(
        tap((response) => {
          this.storageService._setToken(response.token);
          this.router.navigate(['/']);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(
            () => new Error('Registration failed, please try again.')
          );
        })
      );
  }

  logout() {
    this.storageService.clearToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return Boolean(this.storageService.getToken());
  }
}
