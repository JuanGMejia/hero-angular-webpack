import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { SharedModule } from '../shared/share.module';
import { CardHeroDetailComponent } from './components/card-hero-detail/card-hero-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MetersPipe } from '../shared/meters.pipe';

@NgModule({
    imports: [
        CommonModule, 
        HeroesRoutingModule, 
        SharedModule,  
        MatInputModule,
        FormsModule,
        MatFormFieldModule],
    exports: [HomeComponent, CardHeroComponent, CardHeroDetailComponent],
    declarations: [HomeComponent, CardHeroComponent, CardHeroDetailComponent],
    providers: [MetersPipe]
})
export class HeroesModule { }
