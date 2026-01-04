import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string="";
  password:string="";

  constructor(private authService: AuthService, private routes:Router){

  }

  login(){
    this.authService.login(this.username,this.password).subscribe({
      next:(data:any)=>{
        this.authService.saveToken(data.token)
        this.routes.navigate(['/entrenadores'])
      },
      error:(error)=>{
        alert("Usuario y/o clave incorrectas")
      }
    })
  }
}
