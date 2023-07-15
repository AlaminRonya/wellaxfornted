import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailData !: string;
  passwordData !: string;
  constructor(private loginService: LoginService, private axiosService: AxiosService, private router: Router){}
  ngOnInit() {
    // if(this.axiosService.getAuthToken() !== null){
    //   this.router.navigateByUrl("/dashboard");
    // }
 }

  submitForm() {
    this.loginService.onLogin(this.emailData, this.passwordData);
  }
  login(loginForm:NgForm){
    console.log(loginForm.value.email);
    this.loginService.onLogin(loginForm.value.email, loginForm.value.password);
  }
}
