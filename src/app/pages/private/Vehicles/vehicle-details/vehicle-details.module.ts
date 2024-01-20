import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleDetailsPageRoutingModule } from './vehicle-details-routing.module';

import { VehicleDetailsPage } from './vehicle-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VehicleDetailsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [VehicleDetailsPage]
})
export class VehicleDetailsPageModule {}
