import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espada-sagrada',
  templateUrl: './espada-sagrada.page.html',
  styleUrls: ['./espada-sagrada.page.scss'],
})
export class EspadaSagradaPage {

  checklistItems = [
    { name: 'Rey Arturo Pendragon', checked: false },
    { name: 'Dragon de Magma', checked: false },
    { name: 'Mago Merlin', checked: false },
    { name: 'Bola de Fuego', checked: false },
    { name: 'Fe sin Limite', checked: false },
    { name: 'Dragon Dorodo', checked: false },
    { name: 'Sir Boores', checked: false },
    { name: 'Gran wyrm', checked: false },
    { name: 'Titania', checked: false },
    { name: 'Excalibur', checked: false }
    // Agrega más ítems si es necesario
  ];

  constructor(private router: Router) {}
  navigateTo(page?: string) {
    if (page) {
      this.router.navigate([`/${page}`]);
    }
  }

  navigateToCollection() {
    // Filtrar ítems seleccionados
    const selectedItems = this.checklistItems.filter(item => item.checked);
    
    // Navegar a la página 'tucoleccion' con los ítems seleccionados como estado
    this.router.navigate(['tucoleccion'], {
      state: { selectedItems: selectedItems }
    });
  }
  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
