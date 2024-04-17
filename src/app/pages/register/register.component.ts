import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnAuthService } from '../../services/own-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor (public Auth: AuthService, public OwnAutha: OwnAuthService) {}
  ngOnInit(): void {
    this.registerObject()
  }

  public UserName:any
  public email:any
  public password:any

  OwnAuth() {
    this.OwnAutha.Register(this.UserName, this.email, this.password)
  }

  public regform!: FormGroup

  registerObject() {
    this.regform = new FormGroup({
      password: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
    })
  }

  register() {
    console.log(this.regform);
    this.Auth.register(this.regform).subscribe((res:any) => {
      if(res.result) {
        alert("succses")
      } else {
        alert("error")
      }
    })
  }
 
}
