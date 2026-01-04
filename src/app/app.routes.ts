import { Routes } from '@angular/router';
import { miguardGuard } from './guards/miguard.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/auth/registro/registro.component').then(m => m.RegistroComponent) },

  { path: 'estadisticas', loadComponent: () => import('./components/estadisticas/estadisticas.component').then(m => m.EstadisticasComponent) },

  { path: 'entrenadores', loadComponent: () => import('./components/entrenador/listado-entrenadores/listado-entrenadores.component').then(m => m.ListadoEntrenadoresComponent) },
  { path: 'equipos', loadComponent: () => import('./components/equipo/listado-equipos/listado-equipos.component').then(m => m.ListadoEquiposComponent) },
  { path: 'jugadores', loadComponent: () => import('./components/jugador/listado-jugadores/listado-jugadores.component').then(m => m.ListadoJugadoresComponent) },
  { path: 'ligas', loadComponent: () => import('./components/liga/listado-ligas/listado-ligas.component').then(m => m.ListadoLigasComponent) },
  { path: 'partidos', loadComponent: () => import('./components/partido/listado-partidos/listado-partidos.component').then(m => m.ListadoPartidosComponent) },

  { path: 'agregar-entrenador', loadComponent: () => import('./components/entrenador/agregar-entrenador/agregar-entrenador.component').then(m => m.AgregarEntrenadorComponent),canActivate:[miguardGuard] },
  { path: 'agregar-equipo', loadComponent: () => import('./components/equipo/agregar-equipo/agregar-equipo.component').then(m => m.AgregarEquipoComponent),canActivate:[miguardGuard] },
  { path: 'agregar-jugador', loadComponent: () => import('./components/jugador/agregar-jugador/agregar-jugador.component').then(m => m.AgregarJugadorComponent),canActivate:[miguardGuard] },
  { path: 'agregar-liga', loadComponent: () => import('./components/liga/agregar-liga/agregar-liga.component').then(m => m.AgregarLigaComponent),canActivate:[miguardGuard] },
  { path: 'agregar-partido', loadComponent: () => import('./components/partido/agregar-partido/agregar-partido.component').then(m => m.AgregarPartidoComponent),canActivate:[miguardGuard] },

  { path: 'actualizar-entrenador/:id', loadComponent: () => import('./components/entrenador/actualizar-entrenador/actualizar-entrenador.component').then(m => m.ActualizarEntrenadorComponent),canActivate:[miguardGuard] },
  { path: 'actualizar-equipo/:id', loadComponent: () => import('./components/equipo/actualizar-equipo/actualizar-equipo.component').then(m => m.ActualizarEquipoComponent),canActivate:[miguardGuard] },
  { path: 'actualizar-jugador/:id', loadComponent: () => import('./components/jugador/actualizar-jugador/actualizar-jugador.component').then(m => m.ActualizarJugadorComponent),canActivate:[miguardGuard] },
  { path: 'actualizar-liga/:id', loadComponent: () => import('./components/liga/actualizar-liga/actualizar-liga.component').then(m => m.ActualizarLigaComponent),canActivate:[miguardGuard] },
  { path: 'actualizar-partido/:id', loadComponent: () => import('./components/partido/actualizar-partido/actualizar-partido.component').then(m => m.ActualizarPartidoComponent),canActivate:[miguardGuard] },

  { path: 'eliminar-entrenador/:id', loadComponent: () => import('./components/entrenador/eliminar-entrenador/eliminar-entrenador.component').then(m => m.EliminarEntrenadorComponent),canActivate:[miguardGuard] },
  { path: 'eliminar-equipo/:id', loadComponent: () => import('./components/equipo/eliminar-equipo/eliminar-equipo.component').then(m => m.EliminarEquipoComponent),canActivate:[miguardGuard] },
  { path: 'eliminar-jugador/:id', loadComponent: () => import('./components/jugador/eliminar-jugador/eliminar-jugador.component').then(m => m.EliminarJugadorComponent),canActivate:[miguardGuard] },
  { path: 'eliminar-liga/:id', loadComponent: () => import('./components/liga/eliminar-liga/eliminar-liga.component').then(m => m.EliminarLigaComponent),canActivate:[miguardGuard] },
  { path: 'eliminar-partido/:id', loadComponent: () => import('./components/partido/eliminar-partido/eliminar-partido.component').then(m => m.EliminarPartidoComponent),canActivate:[miguardGuard] },



  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
