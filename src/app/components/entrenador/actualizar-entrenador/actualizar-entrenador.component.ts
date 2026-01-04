import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from "@angular/router";
import { Entrenador } from '../../../models/entrenador';
import { FormsModule } from '@angular/forms';
import { EntrenadorService } from '../../../services/entrenador.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-actualizar-entrenador',
  imports: [RouterModule, FormsModule],
  templateUrl: './actualizar-entrenador.component.html',
  styleUrl: './actualizar-entrenador.component.css'
})
export class ActualizarEntrenadorComponent {

  //Un entrador vacio
  entrenador:Entrenador={
    id:0,
    nombre:"",
    nacionalidad:"",
    experiencia:0,
    equipoId:0
  }

  constructor(private servicioEntrenador:EntrenadorService, private rutaActiva:ActivatedRoute, private authService:AuthService, private routes:Router){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioEntrenador.getEntrenadorById(id).subscribe({
      next:(data)=>{
        this.entrenador=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

  actualizar(){
    this.servicioEntrenador.updateEntrenador(this.entrenador.id,this.entrenador).subscribe({
      next:(data)=>{
        alert("Entrenador actualizado");
        this.routes.navigate(['/entrenadores'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar al entrenador');
      }
    })
  }
}
