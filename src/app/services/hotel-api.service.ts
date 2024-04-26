import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'node:inspector';

@Injectable({
  providedIn: 'root'
})
export class HotelApiService {

  constructor(public api: HttpClient) { }

  getHotels() {
    return this.api.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
  }

  getRooms() {
    const url = "https://hotelbooking.stepprojects.ge/api/Rooms/GetAll"
    return this.api.get(url)
  }

  getRoomsById(id:any) {
    const url = `https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`
    return this.api.get(url)
  }
}
