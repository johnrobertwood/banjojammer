import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-technique-list',
  templateUrl: './manage-technique-list.component.html',
  styleUrls: ['./manage-technique-list.component.css'],
})
export class ManageTechniqueListComponent implements OnInit {
  techniques$: Observable<Technique[]>;
  selectedName: string;

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
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('randy-tech');
      })
    );
  }
}
