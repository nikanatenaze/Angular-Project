import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {

  constructor(public api: HttpClient) { }

  getHotels() {
    return this.api.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
  }
}
