import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from "@angular/router";
import { Entrenador } from '../../../models/entrenador';
import { FormsModule } from '@angular/forms';
import { EntrenadorService } from '../../../services/entrenador.service';



@Component({
  selector: 'app-eliminar-entrenador',
  imports: [RouterModule,FormsModule],
  templateUrl: './eliminar-entrenador.component.html',
  styleUrl: './eliminar-entrenador.component.css'
})
export class EliminarEntrenadorComponent {

  entrenador: Entrenador = {
    id: 0,
    nombre: "",
    nacionalidad: "",
    experiencia: 0,
    equipoId: 0
  }

  constructor(
    private entrenadorService: EntrenadorService,
    private rutaActiva: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit(): void {
    const entrenadorId=this.rutaActiva.snapshot.paramMap.get('id');
    this.entrenadorService.getEntrenadorById(entrenadorId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.entrenador = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer el entrenador");
      }
    })
  }

  eliminar(){
this.entrenadorService.deleteEntrenador(this.entrenador.id).subscribe({
      next:(data)=>{
        alert("Entrenador eliminado");
        this.routes.navigate(['/entrenadores'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar al entrenador');
      }
    })
  }

}
