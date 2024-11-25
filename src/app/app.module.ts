import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Cambios aquí
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { Camera } from '@ionic-native/camera/ngx'; // Importa Camera
import { File } from '@ionic-native/file/ngx'; // Importa el servicio File
import { customPageTransition } from './animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot({
      navAnimation: customPageTransition, // Aquí registras tu transición personalizada
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    provideHttpClient(withInterceptorsFromDi()), // Configuración recomendada para HttpClient
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
