import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-espada-sagrada',
  templateUrl: './espada-sagrada.page.html',
  styleUrls: ['./espada-sagrada.page.scss'],
})
export class EspadaSagradaPage {

  checklistItems = [
    { name: 'REY ARTURO PENDRAGON', image: 'assets/cartas ES/ES_001.webp', checked: false },
    { name: 'DRAGON DORADO', image: 'assets/cartas ES/Dragon_dorado_Espada.webp', checked: false },
    { name: 'GRAN WYRM', image: 'assets/cartas ES/El_Gran_Wyrm.webp', checked: false },
    { name: 'MAGO MERLIN', image: 'assets/cartas ES/Mago_Merlin.webp', checked: false },
    // Agrega más elementos aquí
  ]

  constructor(private router: Router,private dbTaskService: DBTaskService) {}

  ngOnInit() {
    // Lógica de inicialización si es necesario
  }

  navigateTo(page?: string) {
    if (page) {
      this.router.navigate([`/${page}`]);
    }
  }

  navigateToCollection() {
    // Filtrar ítems seleccionados
    const selectedItems = this.checklistItems.filter(item => item.checked);
    this.dbTaskService.addSelectedItems(selectedItems); // Guardar ítems en el servicio
    // Navegar a la página 'tucoleccion' con los ítems seleccionados como estado
    this.router.navigate(['coleccion'], {
      state: { selectedItems: selectedItems }
    });
  }
  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
