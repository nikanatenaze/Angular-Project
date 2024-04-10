import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public userData: AuthService, public router: Router) {}



public firstName: any;
public lastName: any;

public isLoggedIn: boolean = false


logIn() {

   
   let userLogin = this.userData.userList.find((item:any) => item.userFisrtName === this.firstName && item.userLastName == this.lastName)
    if(userLogin) {
      this.isLoggedIn = true
      localStorage.setItem("admin", this.isLoggedIn.toString())
     this.router.navigate(["/admin"])
    }
  
  
  }
}
