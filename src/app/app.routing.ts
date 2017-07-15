import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RosterPageComponent } from './roster-page/roster-page.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AboutPageComponent } from './about-page/about-page.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'roster-page',
    component: RosterPageComponent
  },
  {
    path: 'about-page',
    component: AboutPageComponent
  },
  {
    path: 'players/:$key',
    component: PlayerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
