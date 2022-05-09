import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent implements OnInit {
  techniques$!: Observable<Technique[]>;
  selectedName!: string | null;
  modulePath!: string | null;

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTechniques();
  }

  getTechniques(): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.modulePath = params.get('module');
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('randy-tech');
      })
    );
  }
}
