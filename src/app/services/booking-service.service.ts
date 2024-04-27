import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.api.post("https://hotelbooking.stepprojects.ge/api/Booking", body, {responseType: "text"})
  }

  cancelBooking(id:any) {
    return this.api.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`)
  }
}
