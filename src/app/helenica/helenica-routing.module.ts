import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelenicaPage } from './helenica.page';

const routes: Routes = [
  {
    path: '',
    component: HelenicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelenicaPageRoutingModule {}
