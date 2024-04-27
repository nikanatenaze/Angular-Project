import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../../../services/hotel-api.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit {
  constructor(public api: HotelApiService) {}
  ngOnInit(): void {
    this.getdata()
  }

  public Hotels:any
  getdata() {
    this.api.getHotels().subscribe(info => {
      this.Hotels = info
    })
  }
}
