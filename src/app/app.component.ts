import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
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
  techniquesC$: Observable<Technique[]>;
  techniquesD$: Observable<Technique[]>;
  @ViewChild('freeContent') freeExpansionPanel: MatExpansionPanel;
  @ViewChild('gorillaContent') gorillaExpansionPanel: MatExpansionPanel;
  @ViewChild('grillContent') grillExpansionPanel: MatExpansionPanel;
  @ViewChild('greekContent') greekExpansionPanel: MatExpansionPanel;

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
    this.getTechniquesB('gorilla-tech');
    this.getTechniquesC('grill-tech');
    this.getTechniquesD('greek-tech');
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
      this.gorillaExpansionPanel.hideToggle = true;
      this.gorillaExpansionPanel.disabled = true;
      this.gorillaExpansionPanel.expanded = false;
      this.gorillaExpansionPanel.close();
      this.grillExpansionPanel.hideToggle = true;
      this.grillExpansionPanel.disabled = true;
      this.grillExpansionPanel.expanded = false;
      this.grillExpansionPanel.close();
      this.greekExpansionPanel.hideToggle = true;
      this.greekExpansionPanel.disabled = true;
      this.greekExpansionPanel.expanded = false;
      this.freeExpansionPanel.expanded = false;
      this.greekExpansionPanel.close();
    }
  }

  onAuthEvent(data: HubPayload) {
    if (data.event === 'signIn') {
      this.loggedIn = true;
      this.authService.login(data);
      this.gorillaExpansionPanel.hideToggle = false;
      this.gorillaExpansionPanel.disabled = false;
      this.gorillaExpansionPanel.expanded = true;
      this.grillExpansionPanel.hideToggle = false;
      this.grillExpansionPanel.disabled = false;
      this.greekExpansionPanel.hideToggle = false;
      this.greekExpansionPanel.disabled = false;
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
      this.gorillaExpansionPanel.expanded = false;
      this.grillExpansionPanel.close();
      this.grillExpansionPanel.disabled = true;
      this.grillExpansionPanel.hideToggle = true;
      this.grillExpansionPanel.expanded = false;
      this.greekExpansionPanel.close();
      this.greekExpansionPanel.disabled = true;
      this.greekExpansionPanel.hideToggle = true;
      this.greekExpansionPanel.expanded = false;
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

  getTechniquesA(techName: string): void {
    this.techniquesA$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('jaffy-tech');
      })
    );
  }

  getTechniquesB(techName: string): void {
    this.techniquesB$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('gorilla-tech');
      })
    );
  }

  getTechniquesC(techName: string): void {
    this.techniquesC$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('grill-tech');
      })
    );
  }

  getTechniquesD(techName: string): void {
    this.techniquesD$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('greek-tech');
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
