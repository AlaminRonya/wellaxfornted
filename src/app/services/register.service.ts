import { Injectable } from '@angular/core';
import { AxiosService } from './axios.service';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private axiosService: AxiosService, private router: Router, private userAuthService: UserAuthService){}

  register(firstName: string, lastName: string, email: string, password:string):void{
    
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: null
      }
    ).then(
      response => {
          // this.axiosService.setAuthToken(response.data.accessToken);
          // this.componentToShow = "messages";
          this.userAuthService.setToken(response.data.accessToken);
          this.userAuthService.setRole(response.data.role);
          console.log(response.data.accessToken);
          console.log(response.data.role);
          if(response.data.role === "ADMIN"){
            this.router.navigateByUrl("/dashboard");
          }else if(response.data.role === "SUB_ADMIN"){
            // this.router.navigateByUrl("/dashboard");
          }else if(response.data.role === "MANAGER"){
            // this.router.navigateByUrl("/dashboard");
          }else if(response.data.role === "DOCTOR"){
            // this.router.navigateByUrl("/dashboard");
          }else if(response.data.role === "PATIENT"){
            // this.router.navigateByUrl("/dashboard");
          }else if(response.data.role === "USER"){
            // this.router.navigateByUrl("/dashboard");
          }
          
      }).catch(
      error => {
          // this.axiosService.setAuthToken(null);
          // this.componentToShow = "welcome";
          console.log("*****************");
          // this.userAuthService.setToken("null");
          // this.userAuthService.setRole("null");
    });
}

}
