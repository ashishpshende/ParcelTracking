import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultsVehicleListPageRoutingModule } from './search-results-vehicle-list-routing.module';

import { SearchResultsVehicleListPage } from './search-results-vehicle-list.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsVehicleListPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [SearchResultsVehicleListPage]
})
export class SearchResultsVehicleListPageModule {}
