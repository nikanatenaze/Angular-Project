import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OwnAuthService } from '../../services/own-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private Auth: AuthService, public OwnAuth: OwnAuthService) {}
  ngOnInit(): void {
    this.FormObject();
  }

  public loginform!: FormGroup

  FormObject() {
    this.loginform = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
  }

  login() {
    this.Auth.signin(this.loginform)
    console.log(this.loginform);   
  }

  // Own Auth
  public emaila:any
  public passworda:any

  OwnAuthLogin() {
    this.OwnAuth.Login(this.emaila, this.passworda)
  }
}