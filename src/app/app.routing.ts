import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'add-player',
    component: AddPlayerComponent
  },
  {
    path: 'players/:$key',
    component: PlayerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
