import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Liga } from '../../../models/liga';
import { LigaService } from '../../../services/liga.service';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-listado-ligas',
  imports: [RouterModule, RouterLink],
  templateUrl: './listado-ligas.component.html',
  styleUrl: './listado-ligas.component.css'
})
export class ListadoLigasComponent {

   //Arreglo de ligas y de inicio vacio
  ligas:Liga[]=[];
  datosCargados:boolean=false;
  //En el contructor inyectamos todo lo que se requiera

  constructor(
    private servicioLiga:LigaService,
    private authService:AuthService,
    private rutas:Router){

  }

  //Cuando se inicie el componente obtenemos las ligas
  ngOnInit():void{
    //Consumir el servicio de ligas - Suscribirse
    if(!this.datosCargados)
    this.servicioLiga.getLigas().subscribe({
      next:(data)=>{
        //No hay error, tenemos las ligas
        this.ligas=data;
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
