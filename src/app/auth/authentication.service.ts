import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public auth: AuthService) {}

  login(): Observable<any> {
    this.auth.loginWithPopup();
    return this.auth.isAuthenticated$;
  }

  logout(): void {
    this.auth.logout();
  }
}
