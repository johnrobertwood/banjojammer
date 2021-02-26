import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss'],
})
export class TechniqueListComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  techniques: Technique[];
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
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          // this.selectedId = +params.get('id');
          return this.techniqueService.getTechniques();
        }),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((techniques) => {
        const obj = JSON.parse(techniques.body).techniques;
        const arr = [];

        for (const key in obj) {
          arr.push(obj[key]);
        }

        arr.sort((a, b) => {
          return a.id - b.id;
        });

        this.techniques = arr;
      });
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

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
