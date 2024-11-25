import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.page.html',
  styleUrls: ['./coleccion.page.scss'],
})
export class ColeccionPage implements OnInit { // PascalCase
  selectedItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Recupera los ítems seleccionados desde el estado de navegación
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { selectedItems: any[] };
    this.selectedItems = state?.selectedItems || [];
  }

  // Navegación a otras páginas
  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  // Método para cerrar sesión
  cerrarSesion() {
    console.log('Cerrando sesión');
    this.router.navigate(['login']);
  }
}
