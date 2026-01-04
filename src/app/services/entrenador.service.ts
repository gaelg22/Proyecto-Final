import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrenador } from '../models/entrenador';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private apiUrl = 'https://ligas-deportivas.onrender.com';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // 🔹 Obtener todos los entrenadores (MAPEADO)
  getEntrenadores(): Observable<Entrenador[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/api/entrenadores`,
      {
        headers: {
          Authorization: 'Bearer ' + this.authService.getToken()
        }
      }
    ).pipe(
      map(data =>
        data.map(e => ({
          id: e.id,
          nombre: e.nombre,
          nacionalidad: e.nacionalidad,
          experiencia: e.experiencia,
          equipoId: e.equipo?.id
        }))
      )
    );
  }

  // Obtener entrenador por ID
  getEntrenadorById(id: any): Observable<Entrenador> {
    return this.http.get<any>(
      `${this.apiUrl}/api/entrenadores/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + this.authService.getToken()
        }
      }
    ).pipe(
      map(e=> ({
        id: e.id,
        nombre: e.nombre,
        nacionalidad: e.nacionalidad,
        experiencia: e.experiencia,
        equipoId: e.equipo?.id
      }))
    );
  }

  // Agregar entrenador
  addEntrenador(entrenador: Entrenador): Observable<Entrenador> {
    return this.http.post<Entrenador>(
      `${this.apiUrl}/api/entrenadores`,
      entrenador,
      {
        headers: {
          Authorization: 'Bearer ' + this.authService.getToken()
        }
      }
    );
  }

  // Actualizar entrenador
  updateEntrenador(id: any, entrenador: Entrenador): Observable<Entrenador> {
    return this.http.put<Entrenador>(
      `${this.apiUrl}/api/entrenadores/${id}`,
      entrenador,
      {
        headers: {
          Authorization: 'Bearer ' + this.authService.getToken()
        }
      }
    );
  }

  // Eliminar entrenador
  deleteEntrenador(id: any): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/api/entrenadores/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + this.authService.getToken()
        }
      }
    );
  }
}
