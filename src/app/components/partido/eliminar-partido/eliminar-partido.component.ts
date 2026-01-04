import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Partido } from '../../../models/partido';
import { FormsModule } from '@angular/forms';
import { PartidoService } from '../../../services/partido.service';


@Component({
  selector: 'app-eliminar-partido',
  imports: [RouterLink,FormsModule],
  templateUrl: './eliminar-partido.component.html',
  styleUrl: './eliminar-partido.component.css'
})
export class EliminarPartidoComponent {

  partido: Partido = {
    id: 0,
    fecha: "",
    golesLocal: 0,
    golesVisitante: 0,
    equipoLocalId: 0,
    equipoVisitanteId: 0,
    ligaId:0
  }

  constructor(
    private partidoService: PartidoService,
    private rutaActiva: ActivatedRoute,
    private routes:Router) {

  }

  ngOnInit(): void {
    const partidoId=this.rutaActiva.snapshot.paramMap.get('id');
    this.partidoService.getPartidoById(partidoId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.partido = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer el partido");
      }
    })
  }

  eliminar(){
this.partidoService.deletePartido(this.partido.id).subscribe({
      next:(data)=>{
        alert("Partido eliminado");
        this.routes.navigate(['/partidos'])
      },
      error:(error)=>{
        alert('Ocurrio un error al eliminar el partido');
      }
    })
}
}