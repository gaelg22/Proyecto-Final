import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Liga } from '../../../models/liga';
import { FormsModule } from '@angular/forms';
import { LigaService } from '../../../services/liga.service';


@Component({
  selector: 'app-eliminar-liga',
  imports: [RouterLink,FormsModule],
  templateUrl: './eliminar-liga.component.html',
  styleUrl: './eliminar-liga.component.css'
})
export class EliminarLigaComponent {

  liga: Liga = {
    id: 0,
    nombre: "",
    pais: "",
    temporadaActual: ""
  }

  constructor(
    private ligaService: LigaService,
    private rutaActiva: ActivatedRoute,
    private routes:Router) {

  }

  ngOnInit(): void {
    const ligaId=this.rutaActiva.snapshot.paramMap.get('id');
    this.ligaService.getLigaById(ligaId).subscribe({
      next:(data)=>{
        //binding bidireccional = [(ngModel)]
        this.liga = data
      },
      error:(error)=>{
        alert("Ocurrio un error al traer la liga");
      }
    })
  }

  eliminar(){
this.ligaService.deleteLiga(this.liga.id).subscribe({
      next:(data)=>{
        alert("Liga eliminada");
        this.routes.navigate(['/ligas'])
      },
      error:(error)=>{
        alert('Ocurrio un error al eliminar la liga');
      }
    })
  }

}
