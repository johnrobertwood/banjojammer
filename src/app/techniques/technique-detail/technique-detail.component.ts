import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from '../technique.service';
import { Technique } from '../technique';

import { switchMap, map, mergeMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz } from '../../quiz';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss'],
})
export class TechniqueDetailComponent implements OnInit {
  technique$: Observable<Technique>;
  quiz$: Observable<Quiz>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
    this.getQuiz();
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

  goBack(techniqueId: number): void {
    this.router.navigate(['/techniques', { id: techniqueId }]);
  }

  save(inputValue): void {
    this.technique$
      .pipe(
        map((technique: Technique) => ({ ...technique, name: inputValue })),
        tap((technique) => console.log(technique)),
        mergeMap((technique: Technique) =>
          this.techniqueService.updateTechnique(technique)
        )
        // In memory API is returning NULL for PUT so hardcoding the id here
      )
      .subscribe(() => this.goBack(11));
  }
}
