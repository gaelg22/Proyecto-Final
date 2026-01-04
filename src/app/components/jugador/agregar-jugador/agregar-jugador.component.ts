import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JugadorService } from '../../../services/jugador.service';
import { Jugador } from '../../../models/jugador';


@Component({
  selector: 'app-agregar-jugador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-jugador.component.html',
  styleUrl: './agregar-jugador.component.css'
})
export class AgregarJugadorComponent {

  jugador = {
    nombre: '',
    pocision: '',
    numero: 0,
    equipoId: 0
  };

  constructor(
    private jugadorService: JugadorService,
    private router: Router
  ) {}

  guardar(): void {
    this.jugadorService.addJugador(this.jugador).subscribe({
      next: () => {
        this.router.navigate(['/jugadores']);
      },
      error: (err) => console.error(err)
    });
  }

}
