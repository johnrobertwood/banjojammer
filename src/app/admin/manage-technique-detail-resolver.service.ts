import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { TechniqueService } from '../techniques/technique.service';
import { Technique } from '../techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class ManageTechniqueDetailResolverService
  implements Resolve<Technique>
{
  constructor(
    private ts: TechniqueService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Technique> | Observable<never> {
    const name = route.paramMap.get('name');
    const module = route.paramMap.get('module');

    return this.ts.getUserFilterTechnique(module, name).pipe(
      take(1),
      mergeMap((technique) => {
        if (technique) {
          return of(technique);
        } else {
          // id not found
          void this.router.navigate(['/manage-technique-list']);
          return EMPTY;
        }
      })
    );
  }
}
