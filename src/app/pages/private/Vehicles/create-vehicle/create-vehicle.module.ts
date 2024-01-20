import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVehiclePageRoutingModule } from './create-vehicle-routing.module';

import { CreateVehiclePage } from './create-vehicle.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVehiclePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [CreateVehiclePage]
})
export class CreateVehiclePageModule {}
