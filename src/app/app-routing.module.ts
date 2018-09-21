import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule'
  },
  { path: '**', redirectTo: 'heroes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
