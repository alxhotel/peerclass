import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RoomComponent } from './components/room.component';
import { HomeComponent } from './components/home.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
  //{ path: 'room/:id', component: RoomComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
