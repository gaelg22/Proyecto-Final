import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LigaService } from '../../../services/liga.service';
import { Liga } from '../../../models/liga';

@Component({
  selector: 'app-agregar-liga',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-liga.component.html',
  styleUrl: './agregar-liga.component.css'
})
export class AgregarLigaComponent {

  liga = {
    nombre: '',
    pais: '',
    temporadaActual: ''
  };

  constructor(
    private ligaService: LigaService,
    private router: Router
  ) {}

  guardar(): void {
    this.ligaService.addLiga(this.liga).subscribe({
      next: () => {
        this.router.navigate(['/ligas']);
      },
      error: (err) => console.error(err)
    });
  }


}
