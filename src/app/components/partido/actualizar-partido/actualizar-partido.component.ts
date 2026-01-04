import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Partido } from '../../../models/partido';
import { FormsModule } from '@angular/forms';
import { PartidoService } from '../../../services/partido.service';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-actualizar-partido',
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-partido.component.html',
  styleUrl: './actualizar-partido.component.css'
})
export class ActualizarPartidoComponent {

  partido:Partido={
    id:0,
    fecha:"",
    golesLocal:0,
    golesVisitante:0, 
    equipoLocalId:0,
    equipoVisitanteId:0,
    ligaId:0
  }

  constructor(private servicioPartido:PartidoService, private rutaActiva:ActivatedRoute, private authService:AuthService, private routes:Router){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioPartido.getPartidoById(id).subscribe({
      next:(data)=>{
        this.partido=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

  actualizar(){
    this.servicioPartido.updatePartido(this.partido.id,this.partido).subscribe({
      next:(data)=>{
        alert("Partido actualizado");
        this.routes.navigate(['/partidos'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar el partido');
      }
    })
  }

}
