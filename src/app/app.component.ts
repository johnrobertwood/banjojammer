import { Component, NgZone, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { takeUntil, tap } from 'rxjs/operators';
import { TechniqueService } from './techniques/technique.service';
import { Technique } from './techniques/technique';
import { AuthenticationService } from './auth/authentication.service';
import { Hub } from 'aws-amplify';
import { HubPayload } from './hub-payload';
import { Observable, of, Subject } from 'rxjs';
import { banjoTech } from './auth/banjo-tech';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  selectedName = '';
  loggedIn = false;
  techniques$!: Observable<Technique[]>;
  techArray: Observable<Technique[]>[] = [];
  private ngUnsubscribe = new Subject();

  constructor(
    private techniqueService: TechniqueService,
    private router: Router,
    private authService: AuthenticationService,
    private zone: NgZone
  ) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
    });
  }

  ngOnInit(): void {
    // this.getTechniques('glover-tech');
    // this.getTechniques('randy-tech');
    // this.getTechniques('gorilla-tech');
    // this.getTechniques('grill-tech');
    // this.getTechniques('greek-tech');
    this.getTechniques('banjo-tech');
    this.checkLocalStorage();
  }

  getAnimationData(outlet: RouterOutlet): string {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  checkLocalStorage(): void {
    const localData = localStorage.getItem('currentUser');
    if (localData) {
      this.loggedIn = true;
      this.authService.login({
        data: {
          username: JSON.parse(localData).username,
          attributes: { sub: JSON.parse(localData).userId },
        },
      });
    } else {
      this.loggedIn = false;
    }
  }

  onAuthEvent(data: HubPayload): void {
    if (data.event === 'signIn') {
      this.loggedIn = true;
      this.authService.login(data);
      this.zone.run(() => {
        void this.router.navigate(['/home']);
      });
    }

    if (data.event === 'signOut') {
      this.loggedIn = false;
      this.authService.logout();
    }

    if (data.event === 'signUp') {
      this.authService
        .addUser(data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe();

      this.zone.run(() => {
        void this.router.navigate(['/confirm']);
      });
    }
  }

  getTechniques(techName: string): void {
    // this.techniques$ = of(banjoTech).pipe(
    this.techniques$ = this.techniqueService.getTechniques(techName).pipe(
      tap((x) => {
        console.log(x);
      })
    );
    // .pipe(tap(() => this.checkLocalStorage()));
    this.techArray.push(this.techniques$);
  }
}
