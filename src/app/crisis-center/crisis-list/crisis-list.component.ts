import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  techniques$: Observable<Technique[]>;

  constructor(private techniqueService: TechniqueService) {}

  ngOnInit() {
    this.techniques$ = this.techniqueService.getTechniques();
  }
}
