import {
    ActionReducerMap,
  } from '@ngrx/store';
  
  import * as fromActions from '../actions';
  import * as fromHeroes from './hero.reducer';
  
  export type Action = fromActions.HeroActions;
  
  export interface EntityState {
    heroes: fromHeroes.HeroState;
  }
  
  export const reducers: ActionReducerMap<EntityState> = {
    heroes: fromHeroes.reducer,
    // here is where i put other reducers, when i have them
  };
  