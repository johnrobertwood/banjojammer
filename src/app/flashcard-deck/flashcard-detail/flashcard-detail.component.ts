import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.css'],
})
export class FlashcardDetailComponent implements OnInit {
  reveal: boolean;
  technique: Technique;
  module: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { flashcard: Technique }) => {
      this.reveal = false;
      this.technique = data.flashcard;
    });

    this.route.paramMap.subscribe((data) => {
      this.module = data.get('module');
    });
  }

  revealAnswer() {
    this.reveal = true;
  }
}
