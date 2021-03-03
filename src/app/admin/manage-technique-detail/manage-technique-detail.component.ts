import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { switchMap, map, mergeMap, pluck } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-manage-technique-detail',
  templateUrl: './manage-technique-detail.component.html',
  styleUrls: ['./manage-technique-detail.component.scss'],
})
export class ManageTechniqueDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  technique$: Observable<Technique>;
  display = false;
  isSmallScreen: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getTechnique();

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  getTechnique(): void {
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getUserTechnique(+params.get('id'))
      )
    );
  }

  goBack(techniqueId: number): void {
    this.router.navigate(['/admin/manage-technique-list', { id: techniqueId }]);
  }

  save(inputValue: string): void {
    this.technique$
      .pipe(
        map((technique: Technique) => ({
          ...technique,
          displayName: inputValue,
        })),
        mergeMap((technique: Technique) =>
          this.techniqueService.editTechnique(technique)
        )
        // In memory API is returning NULL for PUT so hardcoding the id here
      )
      .subscribe(() => this.goBack(11));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
