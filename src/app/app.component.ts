import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';
import { TechniqueService } from './techniques/technique.service';
import { Technique } from './techniques/technique';
import { AuthenticationService } from './auth/authentication.service';
import { Hub } from 'aws-amplify';
import { HubPayload } from './hub-payload';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  isSmallScreen: boolean;
  selectedId: number;
  loggedIn = false;
  techniques: Technique[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private techniqueService: TechniqueService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
    });
  }

  ngOnInit() {
    this.getTechniques();
    this.checkLocalStorage();

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  checkLocalStorage() {
    const localData = localStorage.getItem('currentUser');
    if (localStorage.getItem('currentUser')) {
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

  onAuthEvent(data: HubPayload) {
    if (data.event === 'signIn') {
      this.loggedIn = true;
      this.authService.login(data);
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
    }
  }

  getTechniques(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          // this.selectedId = +params.get('id');
          return this.techniqueService.getTechniques();
        }),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((techniques) => {
        const obj = JSON.parse(techniques.body).techniques;
        const arr = [];

        for (const key in obj) {
          arr.push(obj[key]);
        }

        arr.sort((a, b) => {
          return a.id - b.id;
        });

        this.techniques = arr;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
