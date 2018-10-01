import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHero from '../../../store/reducers/hero.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  showLoading$: Observable<boolean>;

  constructor(private store: Store<fromHero.HeroState>) {
    this.showLoading$ = this.store.pipe( select(fromHero.getShowLoading) );
  }

}
