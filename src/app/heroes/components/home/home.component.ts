import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/heroes';
import {  HeroSelectors } from '../../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  heroes$: Observable<Hero[]>;

  constructor(
    // private heroDispatchers: HeroDispatchers,
    private heroSelectors: HeroSelectors) {
      this.heroes$ = this.heroSelectors.heroes$;
  }
  ngOnInit() {
    console.log("dispatch action")
    // this.heroDispatchers.getHeroes();
  }
}