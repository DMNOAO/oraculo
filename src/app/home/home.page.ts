import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private images: string[] = [
    '/assets/Ira-del-Nahual.jpg',
    '/assets/Odin.jpg',
    '/assets/Zeus.jpg',
    '/assets/Merlin.jpg',
    '/assets/ares.jpg',
    '/assets/Daana.jpg',
    '/assets/eter.jpg',
    '/assets/serpiente-negra.jpg',
    '/assets/Kain.jpg',
  ];

  // Definir las ediciones directamente
  ediciones = [
    { title: 'Espada Sagrada', content: '', background: 'assets/espada_sagrada.png', route: 'espada-sagrada' },
    { title: 'Helénica', content: '', background: 'assets/helenica.png', route: 'listar' },
    { title: 'Hijos de Danaa', content: '', background: 'assets/hijos_de_daana.png', route: 'listar' },
    { title: 'Dominios de Ra', content: '', background: 'assets/dominios_de_ra.png', route: 'listar' },
  ];

  currentImageIndex: number = 0;
  backgroundImage: string = this.images[this.currentImageIndex];
  intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startBackgroundRotation();
  }

  ngOnDestroy() {
    // Limpia el intervalo al destruir el componente para evitar fugas de memoria
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startBackgroundRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.backgroundImage = this.images[this.currentImageIndex];
    }, 5000); // Cambia cada 5 segundos
  }

  navigateTo(page?: string) {
    if (page) {
      this.router.navigate([`/${page}`]);
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
