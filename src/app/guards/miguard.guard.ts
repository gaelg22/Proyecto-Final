import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const miguardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  //Rutas públicas
  if (state.url === '/login' || state.url === '/registro') {
    return true;
  }

  // Rutas protegidas
  if (!authService.isLogin()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
