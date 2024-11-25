import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'coleccion',
    loadChildren: () => import('./coleccion/coleccion.module').then( m => m.ColeccionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'espada-sagrada',
    loadChildren: () => import('./espada-sagrada/espada-sagrada.module').then( m => m.EspadaSagradaPageModule)
  },
  {
    path: 'helenica',
    loadChildren: () => import('./helenica/helenica.module').then( m => m.HelenicaPageModule)
  },
  {
    path: 'hijos-daana',
    loadChildren: () => import('./hijos-daana/hijos-daana.module').then( m => m.HijosDaanaPageModule)
  },
  {
    path: 'dominios-ra',
    loadChildren: () => import('./dominios-ra/dominios-ra.module').then( m => m.DominiosRaPageModule)
  },
  {
    path: 'register',
    component: RegisterPageComponent, // Ruta al componente
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
