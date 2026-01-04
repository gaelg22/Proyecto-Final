import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Jugador } from '../../../models/jugador';
import { FormsModule } from '@angular/forms';
import { JugadorService } from '../../../services/jugador.service';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-actualizar-jugador',
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-jugador.component.html',
  styleUrl: './actualizar-jugador.component.css'
})
export class ActualizarJugadorComponent {

  jugador:Jugador={
    id:0,
    nombre:"",
    pocision:"",
    numero:0,
    equipoId:0
  }

  constructor(private servicioJugador:JugadorService, private rutaActiva:ActivatedRoute, private authService:AuthService, private routes:Router){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioJugador.getJugadorById(id).subscribe({
      next:(data)=>{
        this.jugador=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

  actualizar(){
    this.servicioJugador.updateJugador(this.jugador.id,this.jugador).subscribe({
      next:(data)=>{
        alert("Jugador actualizado");
        this.routes.navigate(['/jugadores'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar al jugador');
      }
    })
  }

}
