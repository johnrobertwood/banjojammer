import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { pluck, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/quiz';
import { Flashcard } from 'src/app/flashcard';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss'],
})
export class TechniqueDetailComponent implements OnInit {
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
    this.getVideoUrl();

    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }

  getVideoUrl(): void {
    this.videoUrl$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getVideo(+params.get('id'))
      )
    );
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
          this.techniqueService.getTechnique(+params.get('id'))
        )
      );
    }
  }

  favoriteTechnique(technique: Technique) {
    this.techniqueService.favoriteTechnique(technique).subscribe();
  }
}
