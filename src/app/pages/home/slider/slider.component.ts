import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  public selectedimage:any = 1
  nextimage() {
    this.selectedimage++
    if(this.selectedimage > 4) {
      this.selectedimage = 1
    }
  }
  previmage(){
    this.selectedimage--
    if(this.selectedimage === 0){
      this.selectedimage = 4
    }
  }
}
