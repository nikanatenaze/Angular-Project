import { Component } from '@angular/core';

@Component({
  selector: 'app-register-slider',
  templateUrl: './register-slider.component.html',
  styleUrl: './register-slider.component.css'
})
export class RegisterSliderComponent {
  public selectedimage:any = 0
  public imageArray:any = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1608926632580-067ba78be72b?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]

  nextImg() {
    this.selectedimage++
    if(this.selectedimage > this.imageArray.length - 1) {
      this.selectedimage = 0
    }
  }

  prevImg() {
    this.selectedimage--
    if(this.selectedimage < 0) {
      this.selectedimage = this.imageArray.length - 1
    }
  }

  selectImage(index:any) {
    this.selectedimage = index
  }
}
