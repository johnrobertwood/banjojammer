<mat-toolbar color="primary">
  <div class="d-flex justify-content-between w-100 p-4">
    <div>
      <h1><a routerLink="/home">Gunsite Homework</a></h1>
    </div>
    <div>
      <button mat-button [matMenuTriggerFor]="menu">
        <mat-icon>account_circle</mat-icon>
      </button>
      <button mat-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </div>
  </div>
</mat-toolbar>

<mat-drawer-container class="nav-container d-flex justify-content-center">
  <mat-drawer
    #sidenav
    [mode]="sidenavMode"
    [opened]="!isSmallScreen && !isHomePage"
    position="end"
  >
    <mat-menu #menu="matMenu">
      <button
        *ngIf="loggedIn"
        mat-menu-item
        routerLink="/favorites"
        routerLinkActive="activebutton"
      >
        Favorites
      </button>
      <button
        *ngIf="loggedIn"
        mat-menu-item
        routerLink="/profile"
        routerLinkActive="activebutton"
      >
        Profile
      </button>
      <button
        *ngIf="loggedIn"
        mat-menu-item
        routerLink="/flashcard-deck"
        routerLinkActive="activebutton"
      >
        Flashcards
      </button>
      <button
        *ngIf="loggedIn"
        mat-menu-item
        routerLink="/admin"
        routerLinkActive="activebutton"
      >
        Admin
      </button>
      <button *ngIf="!loggedIn" mat-menu-item routerLink="/login">Login</button>
      <button *ngIf="loggedIn" mat-menu-item routerLink="/login">Logout</button>
    </mat-menu>
    <mat-nav-list *ngFor="let technique of techniques$ | async">
      <a
        mat-menu-item
        [routerLink]="['technique', technique.id]"
        (click)="isSmallScreen ? sidenav.toggle() : null"
        routerLinkActive="activebutton"
        >{{ technique.displayName }}</a
      >
    </mat-nav-list>
  </mat-drawer>
  <mat-drawer-content style="max-width: 600px">
    <div [@routeAnimation]="getAnimationData(routerOutlet)" class="my-2">
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
    <router-outlet name="popup" class="popupContainer"></router-outlet>
    <div class="footer w-100">
      <footer *ngIf="isHomePage" class="text-muted bd-footer d-flex">
        <div class="d-flex justify-content-between w-100 p-2 flex-wrap">
          <div>
            <ul>
              <li><a mat-button> © 2021 Wood Web Development, LLC </a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a
                  mat-button
                  [routerLink]="[{ outlets: { popup: ['compose'] } }]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a mat-button> Terms of Service </a>
              </li>
              <li>
                <a mat-button> Privacy Policy </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </mat-drawer-content>
</mat-drawer-container>