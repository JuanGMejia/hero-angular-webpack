import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';

export const metaReducers: MetaReducer<any>[] = [];


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}