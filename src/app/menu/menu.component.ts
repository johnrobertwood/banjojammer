import { Component, EventEmitter, Input, Output } from '@angular/core';

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
}
