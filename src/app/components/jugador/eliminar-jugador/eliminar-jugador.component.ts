import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Jugador } from '../../../models/jugador';
import { FormsModule } from '@angular/forms';
import { JugadorService } from '../../../services/jugador.service';


@Component({
  selector: 'app-eliminar-jugador',
  imports: [RouterLink,FormsModule],
  templateUrl: './eliminar-jugador.component.html',
  styleUrl: './eliminar-jugador.component.css'
})
export class EliminarJugadorComponent {

  jugador: Jugador = {
    id: 0,
    nombre: "",
    pocision: "",
    numero: 0,
    equipoId: 0
  }

  constructor(
    private jugadorService: JugadorService,
    private rutaActiva: ActivatedRoute,
    private routes:Router) {

  }

  ngOnInit(): void {
    const jugadorId=this.rutaActiva.snapshot.paramMap.get('id');
    this.jugadorService.getJugadorById(jugadorId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.jugador = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer el jugador");
      }
    })
  }

  eliminar(){
this.jugadorService.deleteJugador(this.jugador.id).subscribe({
      next:(data)=>{
        alert("Jugador eliminado");
        this.routes.navigate(['/jugadores'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar al jugador');
      }
    })
  }

}
