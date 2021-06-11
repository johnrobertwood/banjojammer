import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from '../../dialog.service';
import { Technique } from 'src/app/techniques/technique';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.css'],
})
export class FlashcardDetailComponent implements OnInit {
  editName: string;
  reveal: boolean;
  technique: Technique;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { flashcard: Technique }) => {
      this.reveal = false;
      this.technique = data.flashcard;
    });
  }

  gotoNextFlashcard() {
    const techniqueId = this.technique ? this.technique.name : null;
    this.router.navigate(['/flashcard-deck', techniqueId + 1]);
  }

  gotoPrevFlashcard() {
    const techniqueId = this.technique ? this.technique.name : null;
    this.router.navigate(['/flashcard-deck', techniqueId - 1]);
  }

  revealAnswer() {
    this.reveal = true;
  }
}
