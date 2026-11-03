# Ligas deportivas — frontend en Angular

Frontend del proyecto final de la materia (UPIIZ-IPN). Consume la [API de ligas deportivas](https://github.com/gaelg22/Ejercicio-10) hecha en Spring Boot.

## Stack

Angular 19 (componentes standalone) · TypeScript · Bootstrap 5 + AdminLTE · Chart.js

## Qué tiene

- **Login y registro** contra la API. El token JWT se guarda y un **interceptor** lo manda en cada petición.
- **Guard** de rutas: cualquiera puede ver los listados, pero agregar, editar y eliminar requieren sesión.
- CRUD completo de **ligas, equipos, jugadores, entrenadores y partidos** (listado, agregar, actualizar y eliminar para cada uno).
- Página de **estadísticas** con gráficas en Chart.js.
- Rutas con *lazy loading* (`loadComponent`).

## Correrlo

```bash
npm install
ng serve      # http://localhost:4200
```

La URL de la API está en los servicios de `src/app/services/`.
