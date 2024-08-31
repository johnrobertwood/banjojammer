import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Technique } from '../techniques/technique';
import { slideInAnimation } from '../animations';
import { TechniqueService } from '../techniques/technique.service';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [slideInAnimation],
})
export class SideNavComponent implements OnInit {
  @Input() selectedName!: string;
  @Input() loggedIn!: boolean;
  @Input() techniques$!: Observable<Technique[]>;
  @Input() techArray: Observable<Technique[]>[] = [];

  @Output() closeSideNav = new EventEmitter();
  homeModule = '';
  homePageTechniques: Technique[];
  moduleObject$: Observable<{ module: string; techniques: Technique[] }[]>;

  constructor(
    private techniqueService: TechniqueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.moduleObject$ = this.techniqueService.getAllTechniques().pipe(
      map((x) => {
        x = x.filter((y) => y.module !== 'songs');
        x.forEach((y) => {
          y.techniques.sort((a, b) => a.id - b.id);
        });
        return x;
      }),
      tap((x) => console.log(x)),
      map((x) => {
        return x.sort().reverse();
      })
    );
  }

  // getHomeModuleTechniques(): void {
  //   this.techniqueService.getModules().subscribe(
  //     (data) => {
  //       this.homeModule = data[0].userId;
  //       this.getTechniques(this.homeModule);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }

  // getTechniques(homeModule: string): void {
  //   this.techniqueService.getTechniques(homeModule).subscribe((data) => {
  //     this.homePageTechniques = data;
  //   });
  // if (localStorage.getItem('currentUser')) {
  //   this.isLoggedIn = true;
  // } else {
  //   this.isLoggedIn = false;
  // }
  // }

  navigateToDetail(): void {
    this.closeSideNav.emit(null);
  }

  navigateToLogin(): void {
    this.closeSideNav.emit(null);
    this.router.navigate(['/login']);
  }
}
