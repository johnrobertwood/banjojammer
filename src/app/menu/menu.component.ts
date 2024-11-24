import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() loggedIn!: boolean;

  @Output() toggleMenu = new EventEmitter();

  toggleMenuClick(): void {
    this.toggleMenu.emit(null);
  }

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
