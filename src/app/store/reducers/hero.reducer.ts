import * as _ from 'lodash';
import { HeroActions, HeroActionTypes } from '../actions/hero.actions';
import { Hero } from '../../models/heroes';

export interface HeroState {
    heroes: Hero[];
    heroActive: Hero;
}

export const initialState: HeroState = {
    heroes: [],
    heroActive: {}
};

export function reducer(state: HeroState = initialState, action: HeroActions): HeroState {
    switch (action.type) {
        case HeroActionTypes.getHeroesSuccess:
            if(state.heroes.length === 0) {
                state.heroes = action.payload;
            }
            return _.cloneDeep(state);
        
        case HeroActionTypes.getHeroByIndex:
            state.heroActive = state.heroes[action.payload]
            return _.cloneDeep(state);
        
        case HeroActionTypes.updateHero:
            state.heroes[action.payload.index] = action.payload.hero;
            return _.cloneDeep(state);

        default:
            return _.cloneDeep(state);
    }
}

export const getState = (state: HeroState) => state;
export const getHeroes = (state: HeroState) => state.heroes;

