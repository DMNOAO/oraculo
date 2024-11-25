import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HelenicaPageRoutingModule } from './helenica-routing.module';

import { HelenicaPage } from './helenica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HelenicaPageRoutingModule
  ],
  declarations: [HelenicaPage]
})
export class HelenicaPageModule {}
