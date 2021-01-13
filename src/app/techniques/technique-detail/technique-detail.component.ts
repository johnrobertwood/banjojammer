import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/quiz';
import { QuizService } from 'src/app/quiz.service';
import { Flashcard } from 'src/app/flashcard';
import { FlashcardService } from 'src/app/flashcard.service';
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private techniqueService: TechniqueService,
    private quizService: QuizService,
    private flashcardService: FlashcardService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
    this.getQuiz();
    this.getFlashcard();
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
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getTechnique(+params.get('id'))
      )
    );
  }

  getQuiz(): void {
    this.quiz$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.quizService.getQuiz(+params.get('id'))
      )
    );
  }

  getFlashcard(): void {
    this.flashcard$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.flashcardService.getFlashcard(+params.get('id'))
      )
    );
  }

  favoriteTechnique(technique: Technique) {
    this.techniqueService.favoriteTechnique(technique).subscribe();
  }
}
