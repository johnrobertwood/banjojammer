import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, switchMap } from 'rxjs/operators';
import { TechniqueService } from './techniques/technique.service';
import { Technique } from './techniques/technique';
import { AuthenticationService } from './auth/authentication.service';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  techniques: Technique[];
  isSmallScreen: boolean;
  selectedId: number;
  loggedIn = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private techniqueService: TechniqueService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    Hub.listen('auth', (data) => {
      const { payload } = data;
      this.onAuthEvent(payload);
      console.log(
        'A new auth event has happened: ',
        data.payload.data.username + ' has ' + data.payload.event
      );
    });
  }

  ngOnInit() {
    this.getTechniques();

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

  onAuthEvent(data: any) {
    if (data.event === 'signIn') {
      this.loggedIn = true;
      this.authService.login(data);
    }

    if (data.event === 'signOut') {
      this.loggedIn = false;
      this.authService.logout();
    }
  }

  getTechniques(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.selectedId = +params.get('id');
          return this.techniqueService.getTechniques();
        })
      )
      .subscribe((techniques) => {
        this.techniques = techniques;
      });
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
