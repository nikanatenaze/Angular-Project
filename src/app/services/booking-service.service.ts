import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(public api: HttpClient) { }

  getBookeds() {
    return this.api.get("https://hotelbooking.stepprojects.ge/api/Booking")
  }

  postBooking(body:any) {
    return this.api.post("https://hotelbooking.stepprojects.ge/api/Booking", body)
  }
}
