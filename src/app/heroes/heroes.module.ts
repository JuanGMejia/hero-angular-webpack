import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';

@NgModule({
    imports: [CommonModule, HeroesRoutingModule],
    exports: [HomeComponent, CardHeroComponent],
    declarations: [HomeComponent, CardHeroComponent],
    providers: []
})
export class HeroesModule { }
