import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OwnAuthService } from '../../services/own-auth.service';
import { response } from 'express';
import { error } from 'console';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private Auth: AuthService, public OwnAuth: OwnAuthService, public router: Router) {}
  ngOnInit(): void {
    this.FormObject();
    this.loginNotification()
    this.GetUserList()
  }

  public loginform!: FormGroup

  loginNotification() {
    console.log("|=====================================");
    console.log("|"); 
    console.log("|   Use FakeApi to login because "); 
    console.log("|   this project is in beta test");
    console.log("|   https://fakestoreapi.com/users");
    console.log("|");
    console.log("|=====================================");    
  }

  FormObject() {
    this.loginform = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    })
  }

  login() {
    this.Auth.signin(this.loginform)
    .subscribe(
      (response) => {
        console.log("წარმატებით შესვლა:", response);
      },
      (error) => {
        console.error("რაღაც შეცდომაა:", error);
      }
    )  
  }

  // Own Auth
  public emaila:any
  public passworda:any

  OwnAuthLogin() {
    this.OwnAuth.Login(this.emaila, this.passworda)
  }

  // fake api login

  public UserList:any

  GetUserList() {
    this.Auth.getUsers().subscribe((data:any) => {
      this.UserList = data
    })
  }

  LoginFakeApi() {
    let userKeys = this.UserList.find((item:any) => {
      return item.email == this.emaila && item.password == this.passworda
    })

    if(userKeys) {
      localStorage.setItem("user", JSON.stringify(userKeys))
      localStorage.setItem("logined", "true")
      Swal.fire({
        title: "Logined successfully!",
        text: `Welcome ${userKeys.username}, How are you?`,
        icon: "success"
      });
    } else {
      localStorage.setItem("logined", "false")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong password or email, please enter correctly!",
        footer: '<a href="https://fakestoreapi.com/users" target="_blank">Forgot Password?</a>'
      });
    }

    this.router.navigate(["/"])
    
  }
}