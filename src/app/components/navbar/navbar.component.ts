import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private logutService: LogoutService, private router: Router, private userAuthService: UserAuthService){}

  // onLogout():void{
  //   this.logutService.onLogout();
  // }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.logutService.onLogout();
    this.userAuthService.clear();
  }
}
