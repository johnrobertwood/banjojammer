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
  homeModule = '';
  paidModule = '';
  gModule = '';
  songs = [];

  constructor(private techniqueService: TechniqueService) {}

  ngOnInit(): void {
    this.getAllTechniques();
  }

  getAllTechniques(): void {
    this.techniqueService.getTechniques('songs').subscribe((data) => {
      this.songs = data;
    });
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
