import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { MessageService } from 'src/app/message.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styleUrls: ['./technique-list.component.scss'],
})
export class TechniqueListComponent implements OnInit {
  techniques: Technique[];
  selectedId: number;
  isDisabled = false;
  selectedTechnique: Technique;

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  // onSelect(technique: Technique): void {
  //   console.log('on select');
  //   this.selectedTechnique = technique;
  //   this.messageService.add(
  //     `TechniquesComponent: Selected technique =${technique.id}!`
  //   );
  // }

  getTechniques(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.selectedId = +params.get('id');
          return this.techniqueService.getTechniques();
        })
      )
      .subscribe((techniques) => {
        this.techniques = techniques;
      });
  }

  add(name: string): void {
    this.isDisabled = true;
    name = name.trim();
    if (!name) {
      return;
    }
    this.techniqueService
      .addTechnique({ name } as Technique)
      .subscribe((technique) => {
        this.techniques.push(technique);
        this.isDisabled = false;
      });
  }

  delete(technique: Technique): void {
    this.techniques = this.techniques.filter((t) => t !== technique);
    this.techniqueService.deleteTechnique(technique).subscribe();
  }
}
