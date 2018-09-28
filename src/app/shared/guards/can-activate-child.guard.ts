import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as fromHero from '../../store/reducers/hero.reducer';
import { EntityState } from '../../store/reducers/index';

@Injectable()
export class CanActivateChildGuard implements CanActivate {

  constructor(private store: Store<EntityState>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.pipe(select(fromHero.getHeroesState))
      .pipe(
        map(
          (heroesState: any) => {
            console.log('heroesState', heroesState ? true : false);
            return heroesState.lenght > 0 ? true : false;
          },
          () => {
            return false;
          }
        )
      );
  }
}
