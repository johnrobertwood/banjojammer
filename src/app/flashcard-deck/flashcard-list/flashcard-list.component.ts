import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.css'],
})
export class FlashcardListComponent implements OnInit {
  techniques$: Observable<Technique[]>;

  constructor(private techniqueService: TechniqueService) {}

  ngOnInit() {
    this.techniques$ = this.techniqueService.getTechniques();
  }
}
