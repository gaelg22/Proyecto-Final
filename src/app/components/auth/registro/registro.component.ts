import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usuario } from '../../../models/usuario';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  //Binding bidireccional = HTML - TS, TS - HTML
  usuario:Usuario={
    username:"",
    password:""
  }

  constructor(private authService:AuthService,  private routes:Router){

  }

  registro(){
    this.authService.registrar(this.usuario).subscribe({
      next:(data)=>{
        console.log('OK:', data);
        alert("Registro exitoso");
        this.routes.navigate(['/login'])
      },
      error:(err)=>{
        console.error('STATUS:', err.status);
        console.error('BODY:', err.error);
        console.error('FULL:', err);
        alert(`Error ${err.status}: ${err.error?.message || 'Respuesta inválida del backend'}`);
      }
    })
  }

}
