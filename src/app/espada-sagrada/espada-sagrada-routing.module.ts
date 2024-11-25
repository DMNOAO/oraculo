import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspadaSagradaPage } from './espada-sagrada.page';

const routes: Routes = [
  {
    path: '',
    component: EspadaSagradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspadaSagradaPageRoutingModule {}
