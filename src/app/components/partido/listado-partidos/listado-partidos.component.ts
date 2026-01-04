import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Partido } from '../../../models/partido';
import { PartidoService } from '../../../services/partido.service';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-listado-partidos',
  imports: [RouterModule],
  templateUrl: './listado-partidos.component.html',
  styleUrl: './listado-partidos.component.css'
})
export class ListadoPartidosComponent {

  //Arreglo de partidos y de inicio vacio
  partidos:Partido[]=[];
  datosCargados:boolean=false;
  //En el contructor inyectamos todo lo que se requiera

  constructor(
    private servicioPartido:PartidoService,
    private authService:AuthService,
    private rutas:Router){

  }

  //Cuando se inicie el componente obtenemos los partidos
  ngOnInit():void{
    //Consumir el servicio de partidos - Suscribirse
    if(!this.datosCargados)
    this.servicioPartido.getPartidos().subscribe({
      next:(data)=>{
        //No hay error, tenemos los entrenadores
        this.partidos=data;
        this.datosCargados=true;
      },
      error:(error)=>{
        alert("Error interno de servidor: "+error);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.rutas.navigate(['/login']);
  }



}
