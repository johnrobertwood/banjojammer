import { Component, OnInit } from '@angular/core';
import { TechniqueService } from '../techniques/technique.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  thumbnailUrl = '';
  homePageTechniques = [];
  homeModule = '';

  constructor(private techniqueService: TechniqueService) {}

  ngOnInit(): void {
    this.getHomeModuleTechniques();
  }

  getHomeModuleTechniques(): void {
    this.techniqueService.getModules().subscribe(
      (data) => {
        this.homeModule = data[0].userId;
        this.getTechniques(this.homeModule);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  getTechniques(homeModule: string): void {
    this.techniqueService.getTechniques(homeModule).subscribe((data) => {
      this.homePageTechniques = data;
    });
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
