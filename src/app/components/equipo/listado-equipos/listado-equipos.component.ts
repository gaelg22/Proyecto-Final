import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Equipo } from '../../../models/equipo';
import { EquipoService } from '../../../services/equipo.service';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-listado-equipos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listado-equipos.component.html',
  styleUrl: './listado-equipos.component.css'
})
export class ListadoEquiposComponent {


  //Arreglo de entrenadores y de inicio vacio
    equipos:Equipo[]=[];
    datosCargados:boolean=false;
    //En el contructor inyectamos todo lo que se requiera
  
    constructor(
      private servicioEquipo:EquipoService,
      private authService:AuthService,
      private rutas:Router){
  
    }
  
    //Cuando se inicie el componente obtenemos los entrenadores
    ngOnInit():void{
      //Consumir el servicio de entrenadores - Suscribirse
      if(!this.datosCargados)
      this.servicioEquipo.getEquipos().subscribe({
        next:(data)=>{
          //No hay error, tenemos los entrenadores
          this.equipos=data;
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
