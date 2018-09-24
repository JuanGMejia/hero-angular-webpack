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
import { MetersPipe } from '../../shared/meters.pipe';

@Injectable()
export class HeroEffects {

    constructor(
        private actions$: Actions,
        private heroesService: HeroesService,
        private metersPipe: MetersPipe
    ) { }

    @Effect()
    getHeroes$: Observable<Action> = this.actions$.pipe(
        ofType<GetHeroes>(HeroActionTypes.getHeroes),
        switchMap(() => {
            return this.heroesService
                .getHeroes()
                .pipe(
                    map((heroes: Hero[]) => {
                        heroes.forEach((hero: Hero) => {
                            hero._height = +this.metersPipe.transform(hero._height);
                        });
                        
                        return new GetHeroesSuccess(heroes);
                    })
                );
        })
    );

}
