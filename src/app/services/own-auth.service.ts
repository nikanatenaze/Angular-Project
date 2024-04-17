import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwnAuthService{

  Register(name:any, email:any, password:any) {
    localStorage.setItem("UsName", name)
    localStorage.setItem("UsEmail", email)
    localStorage.setItem("UsPassword", password)
  }

  Login(email:any, password:any) {
    if(localStorage.getItem("UsEmail") == email && localStorage.getItem("UsPassword") == password) {
      localStorage.setItem("Logined", "true")
    } else  {
      localStorage.setItem("Logined", "false")
    }
  }
}
