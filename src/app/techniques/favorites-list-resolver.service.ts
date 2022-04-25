import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
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

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Technique> | Observable<never> {
    const name = route.paramMap.get('name');
    const module = route.paramMap.get('module');

    return this.ts.getUserTechnique(this.modulePath = 'glover-tech', this.techName = 'knee-slice').pipe(
      take(1),
      mergeMap((technique) => {
        if (technique) {
          return of(technique);
        } else {
          // id not found
          this.router.navigate(['/favorites/glover-tech/kneeSlice']);
          return EMPTY;
        }
      })
    );
  }
}
