import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "https://ligas-deportivas.onrender.com";

  constructor(private http: HttpClient) { }

  registrar(user: Usuario): Observable<string> {
  return this.http.post(
    this.apiUrl + "/api/auth/register",
    user,
    { responseType: 'text' }
  );
}


  login(user: string, password: string): Observable<string> {
    return this.http.post<string>(this.apiUrl + "/api/auth/login", { username: user, password: password })
  }

  saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  //Por confirmar
  isLogin():boolean{
    return localStorage.getItem("token") ?? null ? true : false;
  }

  logout(): void {
    localStorage.removeItem("token");
  }
}
