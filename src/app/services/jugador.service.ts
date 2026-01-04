import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private apiUrl = "https://ligas-deportivas.onrender.com";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // =========================
  // Obtener todos los jugadores
  // =========================
  getJugadores(): Observable<Jugador[]> {
    return this.http.get<any[]>(this.apiUrl + "/api/jugadores", {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(jugadores =>
        jugadores.map(e => ({
          id: e.id,
          nombre: e.nombre,
          pocision: e.pocision,
          numero: e.numero,
          equipoId: e.equipo?.id
        }))
      )
    );
  }

  // =========================
  // Obtener jugador por ID
  // =========================
  getJugadorById(id: any): Observable<Jugador> {
    return this.http.get<any>(this.apiUrl + "/api/jugadores/" + id, {
      headers: {
        Authorization: "Bearer " + this.authService.getToken()
      }
    }).pipe(
      map(e => ({
        id: e.id,
        nombre: e.nombre,
        pocision: e.pocision,
        numero: e.numero,
        equipoId: e.equipo?.id
      }))
    );
  }

  // =========================
  // Actualizar jugador
  // =========================
  updateJugador(id: any, jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(
      this.apiUrl + "/api/jugadores/" + id,
      jugador,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Eliminar jugador
  // =========================
  deleteJugador(id: any): Observable<void> {
    return this.http.delete<void>(
      this.apiUrl + "/api/jugadores/" + id,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }

  // =========================
  // Agregar jugador
  // =========================
  addJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(
      this.apiUrl + "/api/jugadores",
      jugador,
      {
        headers: {
          Authorization: "Bearer " + this.authService.getToken()
        }
      }
    );
  }
}
