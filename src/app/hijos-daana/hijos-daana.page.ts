import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';
@Component({
  selector: 'app-hijos-daana',
  templateUrl: './hijos-daana.page.html',
  styleUrls: ['./hijos-daana.page.scss'],
})
export class HijosDaanaPage implements OnInit {

  checklistItems = [
    { name: 'DAANA', image: 'assets/cartas HD/Daana_Carta.webp', checked: false },
    { name: 'AVALON', image: 'assets/cartas HD/Avalon_Daana.webp', checked: false },
    { name: 'TIER NA MOE', image: 'assets/cartas HD/Tier-na-moe.webp', checked: false },
    
    // Agrega más elementos aquí
  ];

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
