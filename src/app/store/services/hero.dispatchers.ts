import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { EntityState } from '../reducers';
import * as HeroAction from '../actions';
import { Hero } from '../../models/heroes';

@Injectable()
export class HeroDispatchers {
  constructor(private store: Store<EntityState>) {}
  
  getHeroes() {
    this.store.dispatch(new HeroAction.GetHeroes());
  }

  getHeroByIndex(index: number) {
    this.store.dispatch(new HeroAction.GetHeroByIndex(index));
  }

  updateHero(payload: {hero:Hero, index: number}) {
    this.store.dispatch(new HeroAction.UpdateHero(payload));
  }
}
