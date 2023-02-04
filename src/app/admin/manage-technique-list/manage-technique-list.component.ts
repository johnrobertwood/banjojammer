import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-technique-list',
  templateUrl: './manage-technique-list.component.html',
  styleUrls: ['./manage-technique-list.component.css'],
})
export class ManageTechniqueListComponent {
  techniques$!: Observable<Technique[]>;
  selectedName!: string | null;

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) {}

  getTechniques(tech: string): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques(tech);
      }),
      tap((techniques) => {
        console.log(techniques);
      })
    );
  }
}
