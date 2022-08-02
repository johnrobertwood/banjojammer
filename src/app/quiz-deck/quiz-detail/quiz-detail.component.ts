import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css'],
})
export class QuizDetailComponent implements OnInit {
  technique: Technique;
  module: string | null;
  answered = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { quiz: Technique }) => {
      this.answered = false;
      this.technique = data.quiz;
    });

    this.route.paramMap.subscribe((data) => {
      this.module = data.get('module');
    });
  }

  selectAnswer() {
    this.answered = true;
  }

  nextTechnique() {
    this.answered = false;
  }
}
