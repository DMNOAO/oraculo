import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DominiosRaPageRoutingModule } from './dominios-ra-routing.module';

import { DominiosRaPage } from './dominios-ra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DominiosRaPageRoutingModule
  ],
  declarations: [DominiosRaPage]
})
export class DominiosRaPageModule {}
