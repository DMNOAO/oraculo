import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.page.html',
  styleUrls: ['./coleccion.page.scss'],
})
export class ColeccionPage implements OnInit { // PascalCase
  selectedItems: any[] = [];

  constructor(private router: Router,private dbTaskService: DBTaskService) {}

  ngOnInit() {
    this.selectedItems = this.dbTaskService.getSelectedItems(); // Obtener ítems desde el servicio
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
