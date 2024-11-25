import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HijosDaanaPage } from './hijos-daana.page';

const routes: Routes = [
  {
    path: '',
    component: HijosDaanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HijosDaanaPageRoutingModule {}
