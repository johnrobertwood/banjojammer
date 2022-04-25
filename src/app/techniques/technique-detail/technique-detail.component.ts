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
  technique$!: Observable<Technique>;
  isSmallScreen = false;
  isLoggedIn = false;
  isFavorite = false;
  isQuizDone = false;
  isFlashDone = false;
  url = '';
  modulePath!: string | null;
  techniqueName!: string | null;
  private ngUnsubscribe = new Subject();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private activatedRoute: ActivatedRoute,
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
    this.technique$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // Need this in the template for navigation
        
        this.modulePath = params.get('module');
        this.techniqueName = params.get('name');
        return this.techniqueService.getUserTechnique(
          this.modulePath,
          this.techniqueName
        );
      }),
      tap((technique) => {
        if (localStorage.getItem('currentUser')) {
          this.isLoggedIn = true;
          this.authService.getUserHistory().subscribe((res) => {
            this.isFavorite = res.userHistory.favorite.find(
              (t: Technique) => t.name === technique.name
            );
            this.isQuizDone = res.userHistory.quiz.find(
              (t: Technique) => t.name === technique.name
            );
            this.isFlashDone = res.userHistory.flashcard.find(
              (t: Technique) => t.name === technique.name
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
