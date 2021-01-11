import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() {}

  login(): boolean {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }

  logout(): boolean {
    this.isLoggedIn = false;
    return this.isLoggedIn;
  }
}
