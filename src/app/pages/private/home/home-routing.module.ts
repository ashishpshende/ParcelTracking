/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/app/services/authGuard/auth-guard.service';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [AuthGuardService],
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'search-vehicle',
        loadChildren: () => import('../Vehicles/search-vehicle/search-vehicle.module').then( m => m.SearchVehiclePageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'user-list',
        loadChildren: () => import('../UAM/user-list/user-list.module').then( m => m.UserListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'visualization',
        loadChildren: () => import('../visualization/visualization.module').then( m => m.VisualizationPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'create-user',
        loadChildren: () => import('../UAM/create-user/create-user.module').then( m => m.CreateUserPageModule)
      },
      {
        path: 'update-user',
        loadChildren: () => import('../UAM/update-user/update-user.module').then( m => m.UpdateUserPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'user-details',
        loadChildren: () => import('../UAM/user-details/user-details.module').then( m => m.UserDetailsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'vehicle-list',
        loadChildren: () => import('../Vehicles/vehicle-list/vehicle-list.module').then( m => m.VehicleListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'lookup-list',
        loadChildren: () => import('../lookup/lookup-list/lookup-list.module').then( m => m.LookupListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'create-lookup',
        loadChildren: () => import('../lookup/create-lookup/create-lookup.module').then( m => m.CreateLookupPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'update-lookup',
        loadChildren: () => import('../lookup/update-lookup/update-lookup.module').then( m => m.UpdateLookupPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'search-results-vehicle-list',
        loadChildren: () => import('../Vehicles/search-results-vehicle-list/search-results-vehicle-list.module').then( m => m.SearchResultsVehicleListPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'create-vehicle',
        loadChildren: () => import('../Vehicles/create-vehicle/create-vehicle.module').then( m => m.CreateVehiclePageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'update-vehicle',
        loadChildren: () => import('../Vehicles/update-vehicle/update-vehicle.module').then( m => m.UpdateVehiclePageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'vehicle-details',
        loadChildren: () => import('../Vehicles/vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings/settings.module').then( m => m.SettingsPageModule),
        canActivate: [AuthGuardService],
      }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
