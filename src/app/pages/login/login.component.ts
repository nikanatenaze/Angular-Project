import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private Auth: AuthService) {}

  public passowrd:any = ""
  public email:any = ""
  
  login() {
    this.Auth.signin(this.email, this.passowrd).subscribe(
      (response:any) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  
}