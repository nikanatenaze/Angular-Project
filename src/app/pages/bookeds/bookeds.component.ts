import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../services/booking-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookeds',
  templateUrl: './bookeds.component.html',
  styleUrl: './bookeds.component.css'
})
export class BookedsComponent implements OnInit{

  constructor(public booking: BookingServiceService) {}

  ngOnInit(): void {
    // this.getBookedRooms()
    console.log(this.bookeds);
    
  }

  public bookeds:any

  getBookedRooms() {
    this.booking.getBookeds().subscribe((data:any) => {
      this.bookeds = data
    })
  }

  remove(id:any) {
    this.booking.cancelBooking(id).subscribe(
      response => {
        Swal.fire({
          title: "Great!",
          text: "Successfully booked room!",
          icon: "success"
        });
      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter correct data!",
          footer: '<a href="#">How to fix this error?</a>'
        });
      }
    )
  }

}
