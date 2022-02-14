import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { pluck, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.css'],
})
export class TechniqueDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  technique$: Observable<Technique>;
  isSmallScreen: boolean;
  isLoggedIn: boolean;
  isFavorite: boolean;
  url: string;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private techniqueService: TechniqueService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getTechnique();

    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  getTechnique(): void {
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getUserTechnique(params.get('name'))
      ),
      tap((technique) => {
        if (localStorage.getItem('currentUser')) {
          this.isLoggedIn = true;
          this.authService.getUserHistory().subscribe((res) => {
            this.isFavorite = res.userHistory.favorite.find((fav) => {
              return fav === technique.name;
            });
          });
        } else {
          this.isLoggedIn = false;
        }
      })
    );
  }

  favoriteTechnique(technique: Technique) {
    this.authService.favoriteTechnique(technique).subscribe();
    this.isFavorite = !this.isFavorite;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
