import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, switchMap, takeUntil, tap } from 'rxjs/operators';
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
  @ViewChild('freeContent') freeExpansionPanel: MatExpansionPanel;
  @ViewChild('gorillaContent') gorillaExpansionPanel: MatExpansionPanel;
  @ViewChild('grillContent') grillExpansionPanel: MatExpansionPanel;
  @ViewChild('greekContent') greekExpansionPanel: MatExpansionPanel;
  isSmallScreen: boolean;
  selectedName: string;
  loggedIn = false;
  techniques$: Observable<Technique[]>;
  techArray: Observable<Technique[]>[] = [];
  private ngUnsubscribe = new Subject();

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
    this.getTechniques('glover-tech');
    this.getTechniques('gorilla-tech');
    this.getTechniques('grill-tech');
    this.getTechniques('greek-tech');

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
      this.gorillaExpansionPanel.hideToggle = false;
      this.gorillaExpansionPanel.disabled = false;
      this.gorillaExpansionPanel.open();
      this.grillExpansionPanel.hideToggle = false;
      this.grillExpansionPanel.disabled = false;
      this.grillExpansionPanel.open();
      this.greekExpansionPanel.hideToggle = false;
      this.greekExpansionPanel.disabled = false;
      this.greekExpansionPanel.open();
      this.freeExpansionPanel.expanded = false;
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
      this.gorillaExpansionPanel.hideToggle = false;
      this.gorillaExpansionPanel.disabled = false;
      this.gorillaExpansionPanel.open();
      this.grillExpansionPanel.hideToggle = false;
      this.grillExpansionPanel.disabled = false;
      this.grillExpansionPanel.open();
      this.greekExpansionPanel.hideToggle = false;
      this.greekExpansionPanel.disabled = false;
      this.greekExpansionPanel.open();
      this.freeExpansionPanel.expanded = false;
      this.zone.run(() => {
        this.router.navigate(['/home']);
      });
    }

    if (data.event === 'signOut') {
      this.loggedIn = false;
      this.authService.logout();
      this.gorillaExpansionPanel.close();
      this.gorillaExpansionPanel.disabled = true;
      this.gorillaExpansionPanel.hideToggle = true;
      this.grillExpansionPanel.close();
      this.grillExpansionPanel.disabled = true;
      this.grillExpansionPanel.hideToggle = true;
      this.greekExpansionPanel.close();
      this.greekExpansionPanel.disabled = true;
      this.greekExpansionPanel.hideToggle = true;
      this.freeExpansionPanel.expanded = true;
    }

    if (data.event === 'signUp') {
      this.authService
        .addUser(data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe();

      this.zone.run(() => {
        this.router.navigate(['/confirm']);
      });
    }
  }

  getTechniques(techName: string): void {
    this.techniques$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques(techName);
      }),
      tap(() => this.checkLocalStorage())
    );
    this.techArray.push(this.techniques$);
  }
}
