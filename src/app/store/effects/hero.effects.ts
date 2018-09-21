import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import {
    GetHeroes,
    GetHeroesSuccess,
    HeroActionTypes
} from '../actions/hero.actions';
import { HeroesService } from '../services/hero.service';
import { Hero } from '../../models/heroes';

@Injectable()
export class HeroEffects {

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService
    ) { }

    @Effect()
    getHeroes$: Observable<Action> = this.actions$.pipe(
        ofType<GetHeroes>(HeroActionTypes.getHeroes),
        switchMap(() => {
            return this.heroesService
                .getHeroes()
                .pipe(
                    map((heroes: Hero[]) => {
                        return new GetHeroesSuccess(heroes);
                    })
                );
        })
    );

}
