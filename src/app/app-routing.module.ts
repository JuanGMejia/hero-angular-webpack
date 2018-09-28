import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule'
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { 
  path: '**', 
  redirectTo: '/heroes',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
