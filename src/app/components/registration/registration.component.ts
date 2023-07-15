import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private firstName !: string;
  private lastName !: string;
  private email !: string;
  private password !: string;

  constructor(private registerService: RegisterService){}

  register(registerForm:NgForm){
    this.firstName = registerForm.value.firstName;
    this.lastName = registerForm.value.lastName;
    this.email = registerForm.value.email;
    this.password = registerForm.value.password;
    console.log(registerForm.value);
    this.registerService.register(this.firstName, this.lastName, this.email, this.password);
  }

}
