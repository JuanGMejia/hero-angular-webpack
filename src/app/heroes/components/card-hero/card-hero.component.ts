import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../models/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent implements OnInit {
  @Input() hero: Hero;
  @Input() index: number;
  
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  goDetails(){
    this.router.navigate(['heroes', this.index]);
  }
}