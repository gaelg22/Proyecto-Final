import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from "@angular/router";
import { Equipo } from '../../../models/equipo';
import { FormsModule } from '@angular/forms';
import { EquipoService } from '../../../services/equipo.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-actualizar-equipo',
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-equipo.component.html',
  styleUrl: './actualizar-equipo.component.css'
})
export class ActualizarEquipoComponent {


  equipo:Equipo={
    id:0,
    nombre:"",
    ciudad:"",
    ligaId:0,
    entrenadorId: 0
  }

  constructor(private servicioEquipo:EquipoService, private rutaActiva:ActivatedRoute, private authService:AuthService, private routes:Router){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioEquipo.getEquipoById(id).subscribe({
      next:(data)=>{
        this.equipo=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

  actualizar(){
    this.servicioEquipo.updateEquipo(this.equipo.id,this.equipo).subscribe({
      next:(data)=>{
        alert("Equipo actualizado");
        this.routes.navigate(['/equipos'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar al equipo');
      }
    })
  }

}
