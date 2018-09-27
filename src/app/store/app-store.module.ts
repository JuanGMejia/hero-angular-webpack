import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { effects } from './effects';
import { services } from './';
import { MetersPipe } from '../shared/meters.pipe';
import { RequestInterceptor } from './services/request.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...services, MetersPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },],
  declarations: [],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule {}
