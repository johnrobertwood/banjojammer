import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: string;

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.setMessage();
  }

  setMessage() {
    this.message =
      'Logged ' + (this.authenticationService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authenticationService.login().subscribe((isAuth) => {
      if (isAuth) {
        this.setMessage();
        this.authenticationService.isLoggedIn = true;
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.setMessage();
  }
}
