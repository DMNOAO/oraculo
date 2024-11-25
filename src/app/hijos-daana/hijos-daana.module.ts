import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HijosDaanaPageRoutingModule } from './hijos-daana-routing.module';

import { HijosDaanaPage } from './hijos-daana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HijosDaanaPageRoutingModule
  ],
  declarations: [HijosDaanaPage]
})
export class HijosDaanaPageModule {}
