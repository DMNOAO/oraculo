import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';
import { Camera } from '@ionic-native/camera/ngx'; // Importa Camera

import { File } from '@ionic-native/file/ngx'; // Importa el servicio File

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule
  ],
  declarations: [ItemsPage],
  providers: [Camera, File] // Agrega Camera y File a los proveedores
})
export class ItemsPageModule {}
