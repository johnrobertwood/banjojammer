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
  isQuizDone: boolean;
  isFlashDone: boolean;
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
        this.techniqueService.getUserTechnique(
          'ramsey-tech',
          params.get('name')
        )
      ),
      tap((technique) => {
        if (localStorage.getItem('currentUser')) {
          this.isLoggedIn = true;
          this.authService.getUserHistory().subscribe((res) => {
            this.isFavorite = res.userHistory.favorite.find((t: Technique) => {
              return t.name === technique.name;
            });
            this.isQuizDone = res.userHistory.quiz.find((t: Technique) => {
              return t.name === technique.name;
            });
            this.isFlashDone = res.userHistory.flashcard.find(
              (t: Technique) => {
                return t.name === technique.name;
              }
            );
          });
        } else {
          this.isLoggedIn = false;
        }
      })
    );
  }

  updateTechnique(technique: Technique, saveType: string) {
    this.authService.updateTechnique(technique, saveType).subscribe();
    this.isFavorite = !this.isFavorite;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
