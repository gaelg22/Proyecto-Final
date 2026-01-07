import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipo } from '../models/equipo';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  //PONER TU API
  private apiUrl = "https://ejercicio-10-nt69.onrender.com";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // =========================
  // Obtener todos los equipos
  // =========================
  getEquipos(): Observable<Equipo[]> {
    return this.http.get<any[]>(this.apiUrl + "/api/equipos", {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(equipos =>
        equipos.map(e => ({
          id: e.id,
          nombre: e.nombre,
          ciudad: e.ciudad,
          ligaId: e.liga?.id,
          entrenadorId: e.entrenador?.id
        }))
      )
    );
  }

  // =========================
  // Obtener equipo por ID
  // =========================
  getEquipoById(id: any): Observable<Equipo> {
    return this.http.get<any>(this.apiUrl + "/api/equipos/" + id, {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(e => ({
        id: e.id,
        nombre: e.nombre,
        ciudad: e.ciudad,
        ligaId: e.liga?.id,
        entrenadorId: e.entrenador?.id
      }))
    );
  }

  // =========================
  // Actualizar equipo
  // =========================
  updateEquipo(id: any, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(
      this.apiUrl + "/api/equipos/" + id,
      equipo,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Eliminar equipo
  // =========================
  deleteEquipo(id: any): Observable<void> {
    return this.http.delete<void>(
      this.apiUrl + "/api/equipos/" + id,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Agregar equipo
  // =========================
  addEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(
      this.apiUrl + "/api/equipos",
      equipo,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }
}
