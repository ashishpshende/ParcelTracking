import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsVehicleListPage } from './search-results-vehicle-list.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsVehicleListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultsVehicleListPageRoutingModule {}
