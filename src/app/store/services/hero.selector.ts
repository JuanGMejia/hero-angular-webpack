import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState } from '../reducers';
import { HeroState } from '../reducers/hero.reducer';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getHeroState = createSelector(
  getEntityState,
  (state: EntityState) => state.heroes
);

const getAllHeroes = createSelector(
  getHeroState,
  (state: HeroState) => state.heroes
);

const getActiveHero = createSelector(
  getHeroState,
  (state: HeroState) => state.heroActive
);

@Injectable()
export class HeroSelectors {
  constructor(private store: Store<EntityState>) {}
  heroes$ = this.store.select(getAllHeroes);
  heroState$ = this.store.select(getHeroState);
  heroActive$ = this.store.select(getActiveHero);
}
