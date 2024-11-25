import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Edicion, Carta, Aliado } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class DBTaskService {
  private mockUsers = [
    { email: 'test@test.com', password: '1234' },
    { email: 'admin@admin.com', password: '4321' },
  ];

  private storageReady = false;

  constructor(private storage: Storage) {
    this.initStorage();
  }

  // Inicializar Ionic Storage
  private async initStorage() {
    await this.storage.create();
    this.storageReady = true;
  }

  // ==============================
  // Funcionalidades de Usuarios
  // ==============================
  
  // Validar usuario con datos simulados
  async validateUser(email: string, password: string): Promise<boolean> {
    return this.mockUsers.some(
      (user) => user.email === email && user.password === password
    );
  }

  // Guardar datos de sesión en sessionStorage
  async setSessionData(email: string, isLoggedIn: boolean): Promise<void> {
    const sessionData = {
      email: email,
      isLoggedIn: isLoggedIn,
      timestamp: new Date().toISOString(),
    };
    sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
    console.log(`Sesión guardada: ${JSON.stringify(sessionData)}`);
  }

  // Recuperar datos de sesión
  getSessionData(): any {
    const sessionData = sessionStorage.getItem('sessionData');
    return sessionData ? JSON.parse(sessionData) : null;
  }

  // Eliminar datos de sesión
  clearSessionData(): void {
    sessionStorage.removeItem('sessionData');
    console.log('Sesión eliminada.');
  }

  // ==============================
  // Funcionalidades de CRUD
  // ==============================
  
  // CRUD para Ediciones
  async addEdicion(edicion: Edicion): Promise<void> {
    const ediciones = (await this.getEdiciones()) || [];
    ediciones.push(edicion);
    await this.storage.set('ediciones', ediciones);
  }

  async getEdiciones(): Promise<Edicion[]> {
    if (!this.storageReady) await this.initStorage();
    return (await this.storage.get('ediciones')) || [];
  }

  async updateEdicion(index: number, edicion: Edicion): Promise<void> {
    const ediciones = (await this.getEdiciones()) || [];
    ediciones[index] = edicion;
    await this.storage.set('ediciones', ediciones);
  }

  async deleteEdicion(index: number): Promise<void> {
    const ediciones = (await this.getEdiciones()) || [];
    ediciones.splice(index, 1);
    await this.storage.set('ediciones', ediciones);
  }

  // CRUD para Cartas
  async addCarta(carta: Carta): Promise<void> {
    const cartas = (await this.getCartas()) || [];
    cartas.push(carta);
    await this.storage.set('cartas', cartas);
  }

  async getCartas(): Promise<Carta[]> {
    if (!this.storageReady) await this.initStorage();
    return (await this.storage.get('cartas')) || [];
  }

  async updateCarta(index: number, carta: Carta): Promise<void> {
    const cartas = (await this.getCartas()) || [];
    cartas[index] = carta;
    await this.storage.set('cartas', cartas);
  }

  async deleteCarta(index: number): Promise<void> {
    const cartas = (await this.getCartas()) || [];
    cartas.splice(index, 1);
    await this.storage.set('cartas', cartas);
  }

  // Filtrar Cartas por Edición
  async getCartasByEdicion(id_edicion: string): Promise<Carta[]> {
    const cartas = await this.getCartas();
    return cartas.filter((carta) => carta.id_edicion === id_edicion);
  }

  // Filtrar Aliados
  async getAliados(): Promise<Aliado[]> {
    const cartas = await this.getCartas();
    return cartas.filter((carta) => carta.tipo === 'aliado') as Aliado[];
  }
}
