import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  CanActivateChild,
  CanLoad,
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(): boolean {
    return this.checkLogin();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  canLoad(): boolean {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
