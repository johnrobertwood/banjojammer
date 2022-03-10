import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';
import { TechniqueService } from './techniques/technique.service';
import { Technique } from './techniques/technique';
import { AuthenticationService } from './auth/authentication.service';
import { Hub } from 'aws-amplify';
import { HubPayload } from './hub-payload';
import { Observable, Subject } from 'rxjs';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  isSmallScreen: boolean;
  selectedName: string;
  loggedIn = false;
  techniquesA$: Observable<Technique[]>;
  techniquesB$: Observable<Technique[]>;
  @ViewChild('ramtech') expansionPanel: MatExpansionPanel;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private techniqueService: TechniqueService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private zone: NgZone
  ) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
    });
  }

  ngOnInit() {
    this.getTechniquesA('jaffy-tech');
    this.getTechniquesB('ramsey-tech');
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
      this.expansionPanel.hideToggle = false;
      this.expansionPanel.disabled = false;
      this.expansionPanel.expanded = true;
    }

    if (data.event === 'signOut') {
      this.loggedIn = false;
      this.authService.logout();
      this.expansionPanel.close();
      this.expansionPanel.disabled = true;
      this.expansionPanel.hideToggle = true;
      this.expansionPanel.expanded = false;
    }

    if (data.event === 'signUp') {
      this.authService
        .addUser(data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe();
    }
    this.zone.run(() => {
      this.router.navigate(['/technique/kneeSlice']);
    });
  }

  getTechniquesA(techName: string): void {
    this.techniquesA$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques(techName);
      })
    );
  }

  getTechniquesB(techName: string): void {
    this.techniquesB$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques(techName);
      })
    );
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  get isHomePage() {
    return window.location.pathname === '/home';
  }
}
