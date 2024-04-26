import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnAuthService } from '../../services/own-auth.service';
import { setInterval } from 'timers/promises';
import { log } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor (public Auth: AuthService, public OwnAutha: OwnAuthService) {}
  ngOnInit(): void {
    this.GetFormGroup()
  }

  // OwnAuth() {
  //   this.OwnAutha.Register(this.UserName, this.email, this.password)
  //   console.log(this.UserName);
  //   console.log(this.reel);
  // }

  public RegisForm!: FormGroup

  Register() {
    this.Auth.register(this.RegisForm)
    .subscribe(
      (response) => {
        console.log('წარმატებული რეგისტრაცია:', response);
      },
      (error) => {
        console.error('რაღაც შეცდომაა:', error);
      }
    )
  }

  GetFormGroup() {
    this.RegisForm = new FormGroup({
      password: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    })
  }

}
