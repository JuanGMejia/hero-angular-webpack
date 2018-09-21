import * as _ from 'lodash';
import { HeroActions, HeroActionTypes } from '../actions/hero.actions';
import { Hero } from '../../models/heroes';

export interface HeroState {
    heroes: Hero[];
}

export const initialState: HeroState = {
    heroes: []
};

export function reducer(state: HeroState = initialState, action: HeroActions): HeroState {
    switch (action.type) {
        case HeroActionTypes.getHeroesSuccess:
            state.heroes = action.payload;
            return _.cloneDeep(state);

        default:
            return _.cloneDeep(state);
    }
}

export const getState = (state: HeroState) => state;
export const getHeroes = (state: HeroState) => state.heroes;

