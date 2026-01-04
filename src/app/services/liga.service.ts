import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Liga } from '../models/liga';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private apiUrl = "https://ligas-deportivas.onrender.com";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // =========================
  // Obtener todas las ligas
  // =========================
  getLigas(): Observable<Liga[]> {
    return this.http.get<any[]>(this.apiUrl + "/api/ligas", {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(ligas =>
        ligas.map(e => ({
          id: e.id,
          nombre: e.nombre,
          pais: e.pais,
          temporadaActual: e.temporadaActual
        }))
      )
    );
  }

  // =========================
  // Obtener liga por ID
  // =========================
  getLigaById(id: any): Observable<Liga> {
    return this.http.get<any>(this.apiUrl + "/api/ligas/" + id, {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(e => ({
        id: e.id,
        nombre: e.nombre,
        pais: e.pais,
        temporadaActual: e.temporadaActual
      }))
    );
  }

  // =========================
  // Actualizar jugador
  // =========================
  updateLiga(id: any, liga: Liga): Observable<Liga> {
    return this.http.put<Liga>(
      this.apiUrl + "/api/ligas/" + id,
      liga,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Eliminar liga
  // =========================
  deleteLiga(id: any): Observable<void> {
    return this.http.delete<void>(
      this.apiUrl + "/api/ligas/" + id,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Agregar liga
  // =========================
  addLiga(liga: Liga): Observable<Liga> {
    return this.http.post<Liga>(
      this.apiUrl + "/api/ligas",
      liga,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }
}
