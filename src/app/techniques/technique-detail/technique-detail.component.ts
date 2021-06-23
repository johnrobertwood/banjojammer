import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { pluck, switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

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
  code: string;

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
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getUserTechnique(params.get('name'))
      )
    );
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
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
