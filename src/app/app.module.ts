import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { HeroesModule } from './heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

export const metaReducers: MetaReducer<any>[] = [];


@NgModule({
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}