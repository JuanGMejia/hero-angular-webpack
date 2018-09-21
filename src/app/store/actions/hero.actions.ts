import { Action } from '@ngrx/store';
import { Hero } from '../../models/heroes';

export enum HeroActionTypes {
    getHeroes = '[Heroes] Get heroes',
    getHeroesSuccess = '[Heroes] Get heroes success'
}

export class GetHeroes implements Action {
    readonly type = HeroActionTypes.getHeroes;
}

export class GetHeroesSuccess implements Action {
    readonly type = HeroActionTypes.getHeroesSuccess;

    constructor( public payload: Array<Hero>) {}
}

export type HeroActions =
| GetHeroes 
| GetHeroesSuccess;
