import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongModule, Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-technique-list',
  templateUrl: './manage-technique-list.component.html',
  styleUrls: ['./manage-technique-list.component.css'],
})
export class ManageTechniqueListComponent implements OnInit {
  techniques$!: Observable<Technique[]>;
  modules$!: Observable<SongModule[]>;
  selectedName!: string | null;
  moduleName = '';

  constructor(
    private techniqueService: TechniqueService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getModules();
  }
  getTechniques(moduleName: string): void {
    this.moduleName = moduleName;
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques(moduleName);
      })
    );
  }

  getModules(): void {
    this.modules$ = this.techniqueService.getModules();
  }
}
