import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardHeroDetailComponent } from './components/card-hero-detail/card-hero-detail.component';
import { CanActivateChildGuard } from '../shared/guards/can-activate-child.guard';

const routes: Routes = [
  { path: 'heroes', 
    component: HomeComponent,
  },
  { path: 'heroes/:id', 
    component: CardHeroDetailComponent,
    canActivate: [CanActivateChildGuard]
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
