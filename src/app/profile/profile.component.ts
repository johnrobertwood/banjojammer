import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userData = this.authService.userData;
  }
}
