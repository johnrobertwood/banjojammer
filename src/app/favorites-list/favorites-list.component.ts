import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
})
export class FavoritesListComponent implements OnInit {
  selectedId: number;
  isDisabled = false;
  techniques$: Observable<Technique[]>;

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  getTechniques(): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.techniqueService.getTechniques();
      })
    );
  }

  delete(technique: Technique): void {
    // this.techniques = this.techniques.filter((t) => t !== technique);
    // this.techniqueService.deleteTechnique(technique).subscribe();
  }
}
