import { AfterViewInit, Component, OnInit } from '@angular/core';
import { log } from 'console';
import e from 'express';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.checkStatus()
    this.getUserInformation()
  }

  public loginedBoolean:any
  public secloginBoolean:any

  checkStatus() {
    console.log(localStorage.getItem("logined"));
    
    if(localStorage.getItem("logined") == "true") {
      this.loginedBoolean = true
    } else {
      this.loginedBoolean = false
    }

    if(this.loginedBoolean) {
      this.secloginBoolean = false
    } else {
      this.secloginBoolean = true
    }
    console.log(this.loginedBoolean);
    
  }

  signout() {
    this.loginedBoolean = false
    this.secloginBoolean = true
    localStorage.setItem("logined", "false")
    location.reload()
  }

  public userInformation:any
  public userName:any

  getUserInformation() {
    let localStoragedata:any = localStorage.getItem("user")
    this.userInformation = JSON.parse(localStoragedata)
    this.userName = this.userInformation.username
  }

  // burger bar

  public toggleSlideBar:any = "translateY(-1500px)"
  toggleSlide() {
    if(this.toggleSlideBar === "translateY(-1500px)"){
      this.toggleSlideBar = "translateY(-40px)"
    } else {
      this.toggleSlideBar = "translateY(-1500px)"
    }
    console.log(this.toggleSlideBar);
    
  }
}
