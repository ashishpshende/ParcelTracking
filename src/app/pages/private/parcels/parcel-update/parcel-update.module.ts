import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcelUpdatePageRoutingModule } from './parcel-update-routing.module';

import { ParcelUpdatePage } from './parcel-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcelUpdatePageRoutingModule
  ],
  declarations: [ParcelUpdatePage]
})
export class ParcelUpdatePageModule {}
