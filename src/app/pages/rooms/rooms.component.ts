import { Component, OnInit } from '@angular/core';
import { HotelApiService } from '../../services/hotel-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  constructor (public HotelApi: HotelApiService, public rout: Router) {}
  ngOnInit(): void {
    this.getRooms()
  }

  public Roomsdata:any

  getRooms() {
    this.HotelApi.getRooms().subscribe(data => {
      this.Roomsdata = data
    })
  }

  getTypedRooms(type:any) {
    this.HotelApi.getRooms().subscribe((res:any) => {
      this.Roomsdata = res.filter((item:any) => {
        return item.roomTypeId == type
      })
    })
  }

  getselectedvalue() {
    const selectedElement = document.getElementById("selector") as HTMLSelectElement
    const selectedValue = selectedElement.value
    return selectedValue
  }

  getGustsSelected() {
    const selectedElement = document.getElementById("selector2") as HTMLSelectElement
    const selectedValue = selectedElement.value
    return selectedValue
  }

  public maxprice:any = ""
  public minprice:any = ""
  public checkout:any
  public checkin:any
  public pseudoMax:any
  public pseudoMin:any

  Filter() {
    if (this.maxprice === "") {
      this.pseudoMax = Number.MAX_SAFE_INTEGER
    } else {
      this.pseudoMax = this.maxprice
    }

    if(this.minprice === "" || this.minprice < 0) {
      this.pseudoMin = 0
    } else {
      this.pseudoMin = this.minprice
    }

    if(this.checkin == undefined) {
      this.checkin = ""
    }

    this.HotelApi.getRooms().subscribe((data:any) => {
      this.Roomsdata = data.filter((res:any) => {
        return this.pseudoMin <= res.pricePerNight && this.pseudoMax >= res.pricePerNight && res.roomTypeId == this.getselectedvalue() && res.maximumGuests == this.getGustsSelected()
      })
    })
  }

  sendDetails(details:any) {
    this.rout.navigate(["/details"], {queryParams: details})
  }

}
