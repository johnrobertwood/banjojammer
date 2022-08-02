import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

import { Observable } from 'rxjs';

import { Technique } from '../techniques/technique';
import { slideInAnimation } from '../animations';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [slideInAnimation],
})
export class SideNavComponent {

  @ViewChild('randyContent') randyExpansionPanel!: MatExpansionPanel;
  @ViewChild('gorillaContent') gorillaExpansionPanel!: MatExpansionPanel;
  @ViewChild('grillContent') grillExpansionPanel!: MatExpansionPanel;
  @ViewChild('greekContent') greekExpansionPanel!: MatExpansionPanel;
  @ViewChild('gloverContent') gloverExpansionPanel!: MatExpansionPanel;

  @Input() selectedName: string | null;
  @Input() loggedIn: boolean;
  @Input() techniques$: Observable<Technique[]>;
  @Input() techArray: Observable<Technique[]>[] = [];

  @Output() closeSideNav = new EventEmitter();

  navigateToDetail() {
    this.closeSideNav.emit(null);
  }

}
