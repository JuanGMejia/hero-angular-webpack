import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../models/heroes';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor() {}

  ngOnInit() {
  }
}