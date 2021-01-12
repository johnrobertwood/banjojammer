import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  // redirectUrl: string;
  userData: any;

  constructor() {}

  login(payload: any) {
    console.log(payload);
    this.userData = payload.data;
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
