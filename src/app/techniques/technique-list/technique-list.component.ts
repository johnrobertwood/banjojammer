import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss'],
})
export class TechniqueListComponent implements OnInit {
  techniques$: Observable<Technique[]>;
  selectedId: number;
  isDisabled = false;
  selectedTechnique: Technique;

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  // onSelect(technique: Technique): void {
  //   this.selectedTechnique = technique;
  //   this.messageService.add(
  //     `TechniquesComponent: Selected technique =${technique.id}!`
  //   );
  // }

  getTechniques(): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.techniqueService.getTechniques();
      })
    );
  }

  // add(name: string): void {
  //   this.isDisabled = true;
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //   this.techniqueService
  //     .addTechnique({ name } as Technique)
  //     .subscribe((technique) => {
  //       this.techniques.push(technique);
  //       this.isDisabled = false;
  //     });
  // }

  delete(technique: Technique): void {
    // this.techniques = this.techniques.filter((t) => t !== technique);
    // this.techniqueService.deleteTechnique(technique).subscribe();
  }
}
