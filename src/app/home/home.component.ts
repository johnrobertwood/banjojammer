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
  paidTechniques = [];
  homeModule = '';
  paidModule = '';

  constructor(private techniqueService: TechniqueService) {}

  ngOnInit(): void {
    this.getHomeModuleTechniques();
  }

  getHomeModuleTechniques(): void {
    this.techniqueService.getModules().subscribe(
      (data) => {
        this.homeModule = data[0].userId;
        this.paidModule = data[1].userId;
        this.getTechniques(this.homeModule);
        this.getPaidTechniques(this.paidModule);
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
  }

  getPaidTechniques(paidModule: string): void {
    this.techniqueService.getTechniques(paidModule).subscribe((data) => {
      this.paidTechniques = data;
    });
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
