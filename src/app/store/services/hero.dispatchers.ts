import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { EntityState } from '../reducers';
import * as HeroAction from '../actions';

@Injectable()
export class HeroDispatchers {
  constructor(private store: Store<EntityState>) {}
  
  getHeroes() {
    this.store.dispatch(new HeroAction.GetHeroes());
  }
}
