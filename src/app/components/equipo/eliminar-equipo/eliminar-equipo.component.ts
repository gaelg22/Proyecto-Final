import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Equipo } from '../../../models/equipo';
import { FormsModule } from '@angular/forms';
import { EquipoService } from '../../../services/equipo.service';



@Component({
  selector: 'app-eliminar-equipo',
  imports: [RouterLink,FormsModule],
  templateUrl: './eliminar-equipo.component.html',
  styleUrl: './eliminar-equipo.component.css'
})
export class EliminarEquipoComponent {

  equipo: Equipo = {
    id: 0,
    nombre: "",
    ciudad: '',
    ligaId: 0,
    entrenadorId: 0
  }

  constructor(
    private equipoService: EquipoService,
    private rutaActiva: ActivatedRoute,
    private routes:Router) {

  }

  ngOnInit(): void {
    const equipoId=this.rutaActiva.snapshot.paramMap.get('id');
    this.equipoService.getEquipoById(equipoId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.equipo = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer el equipo");
      }
    })
  }

  eliminar(){
this.equipoService.deleteEquipo(this.equipo.id).subscribe({
      next:(data)=>{
        alert("Equipo eliminado");
        this.routes.navigate(['/equipos'])
      },
      error:(error)=>{
        alert('Ocurrio un error al elimnar al equipo');
      }
    })
  }

}
