import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspadaSagradaPageRoutingModule } from './espada-sagrada-routing.module';

import { EspadaSagradaPage } from './espada-sagrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspadaSagradaPageRoutingModule
  ],
  declarations: [EspadaSagradaPage]
})
export class EspadaSagradaPageModule {}
