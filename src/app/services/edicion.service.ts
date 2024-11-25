import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Edicion {
  id_edicion: string;
  name_edicion: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class EdicionService {
  private apiUrl = 'http://127.0.0.1:8001/ediciones/'; // Asegúrate de que la URL sea correcta

  constructor(private http: HttpClient) {}

  getEdiciones(): Observable<Edicion[]> {
    return this.http.get<Edicion[]>(this.apiUrl);
  }
}
