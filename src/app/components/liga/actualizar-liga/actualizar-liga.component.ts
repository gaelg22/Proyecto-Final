import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Liga } from '../../../models/liga';
import { FormsModule } from '@angular/forms';
import { LigaService } from '../../../services/liga.service';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-actualizar-liga',
  imports: [RouterLink, FormsModule],
  templateUrl: './actualizar-liga.component.html',
  styleUrl: './actualizar-liga.component.css'
})
export class ActualizarLigaComponent {

  liga:Liga={
    id:0,
    nombre:"",
    pais:"",
    temporadaActual: ""
  }

  constructor(private servicioLiga:LigaService, private rutaActiva:ActivatedRoute, private authService:AuthService, private routes:Router){

  }

  ngOnInit(){
    const id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioLiga.getLigaById(id).subscribe({
      next:(data)=>{
        this.liga=data;
      },
      error:(error)=>{
        alert('Ocurrio un error')
      }
    })
  }

  actualizar(){
    this.servicioLiga.updateLiga(this.liga.id,this.liga).subscribe({
      next:(data)=>{
        alert("Liga actualizado");
        this.routes.navigate(['/ligas'])
      },
      error:(error)=>{
        alert('Ocurrio un error al actualizar la liga');
      }
    })
  }

}
