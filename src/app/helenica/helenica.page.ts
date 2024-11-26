import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';
@Component({
  selector: 'app-helenica',
  templateUrl: './helenica.page.html',
  styleUrls: ['./helenica.page.scss'],
})
export class HelenicaPage implements OnInit {

  checklistItems = [
    { name: 'CRONOS', image: 'assets/cartas HE/Cronos_Helenica.webp', checked: false },
    { name: 'GRAN ZEUS', image: 'assets/cartas HE/Gran_Zeus.webp', checked: false },
    { name: 'ANTORCHA OLIMPICA', image: 'assets/cartas HE/Antorcha_Ol_mpica.webp', checked: false },
    
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
