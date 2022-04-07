import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { TechniqueService } from '../technique.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
})
export class FavoritesListComponent implements OnInit {
  techniques$: Observable<Technique[]>;
  selectedName = null;
  modulePath: string;
  favArray = [];

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private ts: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  selectTech(tech: Technique) {
    this.selectedName = tech.name;
  }

  getTechniques(): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.modulePath = params.get('module');
        this.selectedName = params.get('name');
        return this.authService.getUserHistory();
      }),
      map((user) => user.userHistory.favorite),
      tap((x) => (this.favArray = x)),
      switchMap((fav) => {
        return this.ts.getTechniques(this.modulePath);
      }),
      map((arr1) => {
        const arr = [];
        for (let i = 0; i < arr1.length; ++i) {
          for (let j = 0; j < this.favArray.length; ++j) {
            if (arr1[i].name === this.favArray[j].name) {
              // If element is in both the arrays
              arr.push(arr1[i]); // Push to arr array
            }
          }
        }
        return arr;
      })
    );
  }

  // delete(technique: Technique): void {
  //   this.techniques = this.techniques.filter((t) => t !== technique);
  //   this.techniqueService.deleteTechnique(technique).subscribe();
  // }
}
