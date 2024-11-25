import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  userProfile: any = {
    firstName: '',
    lastName: '',
    educationLevel: '',
    birthDate: ''
  };

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  cerrarSesion() {
    // Implementa tu lógica de cierre de sesión aquí
  }
}
