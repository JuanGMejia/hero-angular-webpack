import { Action } from '@ngrx/store';
import { Hero } from '../../models/heroes';

export enum HeroActionTypes {
    getHeroes = '[Heroes] Get heroes',
    getHeroesSuccess = '[Heroes] Get heroes success',
    getHeroByIndex = '[Heroes] Get hero by index',
    updateHero = '[Heroes] Update hero',
    setShowLoading = '[Layout] set showLoading',
}

export class GetHeroes implements Action {
    readonly type = HeroActionTypes.getHeroes;
}

export class GetHeroesSuccess implements Action {
    readonly type = HeroActionTypes.getHeroesSuccess;

    constructor( public payload: Hero[]) {}
}

export class GetHeroByIndex implements Action {
    readonly type = HeroActionTypes.getHeroByIndex;

    constructor( public payload: number) {}
}

export class UpdateHero implements Action {
    readonly type = HeroActionTypes.updateHero;

    constructor( public payload: {hero: Hero, index: number}) {}
}

export class SetShowLoading implements Action {
    readonly type = HeroActionTypes.setShowLoading;
  
    constructor(public payload: boolean) {}
  }

export type HeroActions =
| GetHeroes 
| GetHeroesSuccess
| GetHeroByIndex
| UpdateHero
| SetShowLoading;
