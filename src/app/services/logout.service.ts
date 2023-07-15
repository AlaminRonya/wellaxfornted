import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private axiosService: AxiosService, private router: Router, private userAuthService: UserAuthService){}
  // onLogout():void{
  //   this.axiosService.request(
  //     "POST",
  //     "/api/v1/auth/logout",
  //     {}
  //   ).then(
  //     response => {
  //       this.router.navigateByUrl("/");
          
  //     }).catch(
  //     error => {
  //         this.axiosService.setAuthToken(null);
  //         // this.componentToShow = "welcome";
  //     });

  // }
  onLogout(): void {
    this.axiosService.request(
      "POST",
      "/logout",
      
      { headers: { Authorization: `Bearer ${this.userAuthService.getToken()}` } } // Pass the token in the headers
    ).then(
      response => {
        this.axiosService.setAuthToken(null);
        this.router.navigateByUrl("");
      }).catch(
      error => {
        // Handle the error
        this.axiosService.setAuthToken(null);
        // this.componentToShow = "welcome";
      });
  }
}
