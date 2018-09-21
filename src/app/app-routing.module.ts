import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
