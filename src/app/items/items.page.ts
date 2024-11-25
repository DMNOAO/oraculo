import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Edicion, Carta, Aliado } from '../models/models';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  ediciones: Edicion[] = [];
  cartas: Carta[] = [];
  selectedEdicion: string = ''; // Define la variable selectedEdicion
  newEdicion: Edicion = { id_edicion: '', name_edicion: '', imagen: '' };
  newCarta: Carta = { id_carta: '', name_carta: '', tipo: '', coste: null, id_edicion: '', rareza: '', imagen: '' };
  newAliado: Aliado = { ...this.newCarta, fuerza: null, raza: '' };
  editEdicion: Edicion = { id_edicion: '', name_edicion: '', imagen: '' };
  editCarta: Carta = { id_carta: '', name_carta: '', tipo: '', coste: null, id_edicion: '', rareza: '', imagen: '' };


  constructor(
    private apiService: ApiService,
    private camera: Camera
  ) {}

  ngOnInit() {
    this.loadEdiciones(); // Cargar las ediciones al inicio
    this.loadCartas();    // Cargar las cartas al inicio
  }

  // Cargar ediciones desde la API
  loadEdiciones() {
    this.apiService.getEdiciones().subscribe(
      (data: Edicion[]) => {
        this.ediciones = data;
      },
      (error) => {
        console.error('Error al cargar las ediciones desde la API', error);
      }
    );
  }

  // Cargar cartas desde la API
  loadCartas() {
    this.apiService.getCartas().subscribe(
      (data: Carta[]) => {
        this.cartas = data;
      },
      (error) => {
        console.error('Error al cargar las cartas desde la API', error);
      }
    );
  }

  // Función para filtrar las cartas por la edición seleccionada
  filterCartasByEdicion() {
    if (this.selectedEdicion) {
      this.apiService.getCartasByEdicion(this.selectedEdicion).subscribe(
        (data: Carta[]) => {
          this.cartas = data;
        },
        (error: any) => {  // Especifica el tipo del error
          console.error('Error al filtrar cartas por edición', error);
        }
      );
    } else {
      this.loadCartas(); // Si no hay edición seleccionada, cargar todas las cartas
    }
  }

  // Función para tomar una foto con la cámara
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, // Usamos base64
      encodingType: this.camera.EncodingType.JPEG, // Tipo de imagen (JPEG o PNG)
      mediaType: this.camera.MediaType.PICTURE, // Tipo de medio: Imagen
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        const base64Image = 'data:image/jpeg;base64,' + imageData;
        this.newEdicion.imagen = base64Image; // Asigna la imagen a la edición
        console.log('Imagen capturada:', this.newEdicion.imagen); // Muestra la imagen en base64
      },
      (err) => {
        console.error('Error al tomar la foto', err); // En caso de error
      }
    );
  }

  // Agregar una nueva edición usando la API
  addEdicion() {
    if (this.newEdicion.id_edicion && this.newEdicion.name_edicion) {
      this.apiService.createEdicion(this.newEdicion).subscribe(
        (data) => {
          console.log('Edición creada:', data);
          this.newEdicion = { id_edicion: '', name_edicion: '', imagen: '' }; // Reinicia los campos
        },
        (error) => {
          console.error('Error al agregar la edición', error);
        }
      );
    }
  }

  // Agregar una nueva carta usando la API
  addCarta() {
    if (this.newCarta.id_carta && this.newCarta.name_carta) {
      this.apiService.createCarta(this.newCarta).subscribe(
        (data) => {
          console.log('Carta creada:', data);
          this.newCarta = {
            id_carta: '',
            name_carta: '',
            tipo: '',
            coste: null,
            id_edicion: '',
            rareza: '',
            imagen: '',
          };
          this.loadCartas(); // Recargar las cartas
        },
        (error) => {
          console.error('Error al agregar la carta', error);
        }
      );
    }
  }

  // Función para cargar la imagen seleccionada
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newEdicion.imagen = e.target.result; // Asigna la imagen seleccionada al objeto newEdicion
      };
      reader.readAsDataURL(file); // Convierte la imagen en un DataURL
    }
  }
}
