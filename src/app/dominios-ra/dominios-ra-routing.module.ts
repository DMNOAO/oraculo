import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DominiosRaPage } from './dominios-ra.page';

const routes: Routes = [
  {
    path: '',
    component: DominiosRaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DominiosRaPageRoutingModule {}
