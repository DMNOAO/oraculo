import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edicion, Carta } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8001'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener todas las ediciones
  getEdiciones(): Observable<Edicion[]> {
    return this.http.get<Edicion[]>(`${this.baseUrl}/ediciones`);
  }

  // Crear una nueva edición
  createEdicion(edicion: Edicion): Observable<Edicion> {
    return this.http.post<Edicion>(`${this.baseUrl}/ediciones`, edicion);
  }

  // Obtener todas las cartas
  getCartas(): Observable<Carta[]> {
    return this.http.get<Carta[]>(`${this.baseUrl}/cartas`);
  }

  // Crear una nueva carta
  createCarta(carta: Carta): Observable<Carta> {
    return this.http.post<Carta>(`${this.baseUrl}/cartas`, carta);
  }

  // Filtrar cartas por edición
  getCartasByEdicion(edicionId: string): Observable<Carta[]> {
    return this.http.get<Carta[]>(`${this.baseUrl}/cartas?edicion=${edicionId}`);
  }
}
