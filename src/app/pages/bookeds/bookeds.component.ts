import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../services/booking-service.service';

@Component({
  selector: 'app-bookeds',
  templateUrl: './bookeds.component.html',
  styleUrl: './bookeds.component.css'
})
export class BookedsComponent implements OnInit{

  constructor(public booking: BookingServiceService) {}

  ngOnInit(): void {
    console.log(this.bookeds);
    this.getBookedRooms()
    
  }

  public bookeds:any

  getBookedRooms() {
    this.booking.getBookeds().subscribe(data => {
      this.bookeds = data
      console.log(this.bookeds);
      
    })
  }

}
