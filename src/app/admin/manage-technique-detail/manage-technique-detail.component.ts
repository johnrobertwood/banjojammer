import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/quiz';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-manage-technique-detail',
  templateUrl: './manage-technique-detail.component.html',
  styleUrls: ['./manage-technique-detail.component.scss'],
})
export class ManageTechniqueDetailComponent implements OnInit {
  technique$: Observable<Technique>;
  quiz$: Observable<Quiz>;
  display = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
    // this.getQuiz();
  }

  getTechnique(): void {
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getTechnique(+params.get('id'))
      )
    );
  }

  // getQuiz(): void {
  //   this.quiz$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) =>
  //       this.quizService.getQuiz(+params.get('id'))
  //     )
  //   );
  // }

  goBack(techniqueId: number): void {
    this.router.navigate(['/admin/manage-technique-list', { id: techniqueId }]);
  }

  save(inputValue: string): void {
    this.technique$
      .pipe(
        map((technique: Technique) => ({ ...technique, name: inputValue })),
        mergeMap((technique: Technique) =>
          this.techniqueService.updateTechnique(technique)
        )
        // In memory API is returning NULL for PUT so hardcoding the id here
      )
      .subscribe(() => this.goBack(11));
  }
}
