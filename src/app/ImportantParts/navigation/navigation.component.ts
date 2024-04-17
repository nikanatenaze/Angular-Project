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
    this.Check()
  }

  Check() {
    
  }
  
  public toggleSlideBar:any = "translateY(-1500px)"
  toggleSlide() {0
    if(this.toggleSlideBar === "translateY(-1500px)"){
      this.toggleSlideBar = "translateY(-40px)"
    } else{
      this.toggleSlideBar = "translateY(-1500px)"
    }
    console.log(this.toggleSlideBar);
    
  }

  public ShownBoolean!:boolean

 
  signout() {
    localStorage.setItem("Logined", "false")
  }
}
