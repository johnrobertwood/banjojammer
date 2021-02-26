import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { pluck, switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Quiz } from 'src/app/dialog-content-quiz/quiz';
import { Flashcard } from 'src/app/dialog-content-flashcard/flashcard';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss'],
})
export class TechniqueDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  technique$: Observable<Technique>;
  quiz$: Observable<Quiz>;
  flashcard$: Observable<Flashcard>;
  videoUrl$: Observable<string>;
  isSmallScreen: boolean;
  isLoggedIn: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private techniqueService: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getTechnique();

    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  getTechnique(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
      this.technique$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.techniqueService.getUserTechnique(+params.get('id'))
        )
      );
    } else {
      this.isLoggedIn = false;
      this.technique$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.techniqueService.getUserTechnique(+params.get('id'))
        )
      );
    }
  }

  favoriteTechnique(technique: Technique) {
    this.techniqueService
      .favoriteTechnique(technique)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
