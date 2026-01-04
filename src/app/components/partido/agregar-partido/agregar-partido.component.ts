import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PartidoService } from '../../../services/partido.service';
import { Partido } from '../../../models/partido';


@Component({
  selector: 'app-agregar-partido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-partido.component.html',
  styleUrl: './agregar-partido.component.css'
})
export class AgregarPartidoComponent {

  partido = {
    fecha: '',
    golesLocal: 0,
    golesVisitante: 0,
    equipoLocalId: 0,
    equipoVisitanteId: 0,
    ligaId: 0
  };

  constructor(
    private partidoService: PartidoService,
    private router: Router
  ) {}

  guardar(): void {
    this.partidoService.addPartido(this.partido).subscribe({
      next: () => {
        this.router.navigate(['/partidos']);
      },
      error: (err) => console.error(err)
    });
  }

}
