import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role: string){
    localStorage.setItem('authRole', role);
  }
  public getRole(): string | null{
    return localStorage.getItem('authRole');
  }
  public setToken(token: string){
    localStorage.setItem('jwtToken', token);
  }
  public getToken(): string | null{
    return localStorage.getItem('jwtToken');
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }
}
