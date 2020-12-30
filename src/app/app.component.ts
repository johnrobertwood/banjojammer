import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck, switchMap } from 'rxjs/operators';
import { TechniqueService } from './techniques/technique.service';
import { Technique } from './techniques/technique';

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

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTechniques();

    this._breakpointObserver
      .observe(['(max-width: 501px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
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
