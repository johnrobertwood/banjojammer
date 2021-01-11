import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Hub } from 'aws-amplify';
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

    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
      console.log(
        'A new auth event has happened: ',
        data.payload.data.username + ' has ' + data.payload.event
      );
    });
  }

  setMessage() {
    this.message =
      'Logged ' + (this.authenticationService.isLoggedIn ? 'in' : 'out');
  }

  onAuthEvent(data: any) {
    console.log(data);
    if (data.event === 'signIn') {
      this.authenticationService.login();
    }

    if (data.event === 'signOut') {
      this.authenticationService.logout();
    }
  }

  // login() {
  //   if (isAuth) {
  //     this.setMessage();
  //     this.authenticationService.isLoggedIn = true;
  //     // Usually you would use the redirect URL from the auth service.
  //     // However to keep the example simple, we will always redirect to `/admin`.
  //     const redirectUrl = '/profile';

  //     // Set our navigation extras object
  //     // that passes on our global query params and fragment
  //     const navigationExtras: NavigationExtras = {
  //       queryParamsHandling: 'preserve',
  //       preserveFragment: true,
  //     };

  //     // Redirect the user
  //     this.router.navigate([redirectUrl], navigationExtras);
  //   }
  // }
}
