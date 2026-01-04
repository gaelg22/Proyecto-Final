import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EquipoService } from '../../../services/equipo.service';
import { Equipo } from '../../../models/equipo';


@Component({
  selector: 'app-agregar-equipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-equipo.component.html',
  styleUrl: './agregar-equipo.component.css'
})
export class AgregarEquipoComponent {

  equipo = {
    nombre: '',
    ciudad: '',
    ligaId: 0,
    entrenadorId: 0
  };

  constructor(
    private equipoService: EquipoService,
    private router: Router
  ) {}

  guardar(): void {
    this.equipoService.addEquipo(this.equipo).subscribe({
      next: () => {
        this.router.navigate(['/equipos']);
      },
      error: (err) => console.error(err)
    });
  }
}



