import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { TechniqueService } from '../techniques/technique.service';
import { Technique } from '../techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class FavoritesListResolverService implements Resolve<Technique> {
  modulePath!: string | null;
  techName!: string | null;
  constructor(private ts: TechniqueService, private router: Router) {}

  resolve(): Observable<Technique> | Observable<never> {
    return this.ts
      .getUserFilterTechnique(
        (this.modulePath = 'randy-tech'),
        (this.techName = 'knee-slice')
      )
      .pipe(
        take(1),
        mergeMap((technique) => {
          if (technique) {
            return of(technique);
          } else {
            // id not found
            void this.router.navigate([
              '/favorites/randy-tech/activeShooterResponse',
            ]);
            return EMPTY;
          }
        })
      );
  }
}
