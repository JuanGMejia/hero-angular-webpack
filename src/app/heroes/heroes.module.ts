import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [CommonModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: []
})
export class HeroesModule { }

