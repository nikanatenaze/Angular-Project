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
    // this.getNavigationData()
    this.Check()
    
  }

  public loginedBoolean!:any
  public realBoolean!:boolean
  public secondBoolean!:boolean

  Check() {
    console.log(localStorage.getItem("Logined"))
    if(localStorage.getItem("Logined") == null) {
      this.loginedBoolean = "false"
    } else {
      this.loginedBoolean = localStorage.getItem("Logined")
    }
    
    if(this.loginedBoolean == "false") {
      this.realBoolean = false
    } else {
      this.realBoolean = true
    } 

    if (this.realBoolean === false) {
      this.secondBoolean = true
    } else {
      this.secondBoolean = false
    }

    console.log("Real Boolean", this.realBoolean);
    console.log("Second Boolean", this.secondBoolean);
    
  }

  public navUserName:any

  // getNavigationData() {
  //   this.navUserName = localStorage.getItem("UsName")
  // }
  
  public toggleSlideBar:any = "translateY(-1500px)"
  toggleSlide() {
    if(this.toggleSlideBar === "translateY(-1500px)"){
      this.toggleSlideBar = "translateY(-40px)"
    } else {
      this.toggleSlideBar = "translateY(-1500px)"
    }
    console.log(this.toggleSlideBar);
    
  }

  public ShownBoolean!:boolean

 
  signout() {
    this.loginedBoolean = false
    localStorage.setItem("Logined", "false")
    location.reload()
  }
}
