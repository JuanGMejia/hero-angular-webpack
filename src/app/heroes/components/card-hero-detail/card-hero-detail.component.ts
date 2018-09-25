import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/heroes';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { HeroDispatchers, HeroSelectors } from '../../../store';

@Component({
  selector: 'app-card-hero-detail',
  templateUrl: './card-hero-detail.component.html',
  styleUrls: ['./card-hero-detail.component.scss']
})
export class CardHeroDetailComponent implements OnInit {
  subscription: Subscription;
  index: number;
  heroActive$: Observable<Hero>;
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroDispatchers: HeroDispatchers,
    private heroSelectors: HeroSelectors,
    private router: Router,
  ) {
    this.heroActive$ = this.heroSelectors.heroActive$;
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.index = +params.id;
      if (this.index) {
        this.getHero();
      }
    });
  }
  getHero() {
    this.heroDispatchers.getHeroByIndex(this.index-1);
    this.heroActive$.subscribe((hero)=>{
      this.hero = hero;
    });
  }

  saveHero(){
    this.heroDispatchers.updateHero({hero: this.hero, index: this.index-1})
  }

  goBack(){
    this.router.navigate(['heroes']);
  }
}