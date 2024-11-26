import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-dominios-ra',
  templateUrl: './dominios-ra.page.html',
  styleUrls: ['./dominios-ra.page.scss'],
})
export class DominiosRaPage implements OnInit {


  checklistItems = [
    { name: 'RA', image: 'assets/cartas DO/Ra.webp', checked: false },
    { name: 'QADESH', image: 'assets/cartas DO/Qadesh.webp', checked: false },
    { name: 'GUIZA', image: 'assets/cartas DO/Guiza.webp', checked: false },
    { name: 'JINETES DE FUEGO', image: 'assets/cartas DO/DR_053.webp', checked: false },
    
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
