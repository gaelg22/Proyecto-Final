import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private apiUrl = "https://ligas-deportivas.onrender.com";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // =========================
  // Obtener todas los partidos
  // =========================
  getPartidos(): Observable<Partido[]> {
    return this.http.get<any[]>(this.apiUrl + "/api/partidos", {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(partidos =>
        partidos.map(e => ({
          id: e.id,
          fecha: e.fecha,
          golesLocal: e.golesLocal,
          golesVisitante: e.golesVisitante,
          equipoLocalId: e.equipoLocal?.id,
          equipoVisitanteId: e.equipoVisitante?.id,
          ligaId: e.liga?.id
        }))
      )
    );
  }

  // =========================
  // Obtener partido por ID
  // =========================
  getPartidoById(id: any): Observable<Partido> {
    return this.http.get<any>(this.apiUrl + "/api/partidos/" + id, {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(e => ({
          id: e.id,
          fecha: e.fecha,
          golesLocal: e.golesLocal,
          golesVisitante: e.golesVisitante,
          equipoLocalId: e.equipoLocal?.id,
          equipoVisitanteId: e.equipoVisitante?.id,
          ligaId: e.liga?.id
      }))
    );
  }

  // =========================
  // Actualizar partido
  // =========================
  updatePartido(id: any, partido: Partido): Observable<Partido> {
    return this.http.put<Partido>(
      this.apiUrl + "/api/partidos/" + id,
      partido,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Eliminar partido
  // =========================
  deletePartido(id: any): Observable<void> {
    return this.http.delete<void>(
      this.apiUrl + "/api/partidos/" + id,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Agregar partido
  // =========================
  addPartido(partido: Partido): Observable<Partido> {
    return this.http.post<Partido>(
      this.apiUrl + "/api/partidos",
      partido,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }
}
