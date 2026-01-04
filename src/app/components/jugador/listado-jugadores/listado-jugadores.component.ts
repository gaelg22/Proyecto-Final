import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Jugador } from '../../../models/jugador';
import { JugadorService } from '../../../services/jugador.service';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-listado-jugadores',
  imports: [RouterModule],
  templateUrl: './listado-jugadores.component.html',
  styleUrl: './listado-jugadores.component.css'
})
export class ListadoJugadoresComponent {


  //Arreglo de jugadores y de inicio vacio
  jugadores:Jugador[]=[];
  datosCargados:boolean=false;
  //En el contructor inyectamos todo lo que se requiera

  constructor(
    private servicioJugador:JugadorService,
    private authService:AuthService,
    private rutas:Router){

  }

  //Cuando se inicie el componente obtenemos los entrenadores
  ngOnInit():void{
    //Consumir el servicio de jugadores - Suscribirse
    if(!this.datosCargados)
    this.servicioJugador.getJugadores().subscribe({
      next:(data)=>{
        //No hay error, tenemos los jugadores
        this.jugadores=data;
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
