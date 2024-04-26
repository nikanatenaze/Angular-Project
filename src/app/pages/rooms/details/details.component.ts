import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelApiService } from '../../../services/hotel-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingServiceService } from '../../../services/booking-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  ngOnInit(): void {
    this.getRouterInfo()
    this.getById()
    this.getMyFormGroup()
  }

  constructor(public routerInfo: ActivatedRoute, public api: HotelApiService, public booking: BookingServiceService) {}
  public routerId:any
  public hotelData:any

  getRouterInfo() {
    this.routerInfo.params.subscribe((data:any) => {
      this.routerId = data
    })
  }

  getById(){
    this.api.getRoomsById(this.routerId.id).subscribe(data => {
      this.hotelData = data
      this.imagesArray = this.hotelData.images
      console.log(this.hotelData);
      
    })
  }

  public selectedImage:any = 0
  public imagesArray:any

  nextimage() {
    this.selectedImage++
    if(this.selectedImage > this.imagesArray.length) {
      this.selectedImage = 0
    }
  }

  previmage() {
    this.selectedImage--
    if(this.selectedImage <= 0) {
      this.selectedImage = this.imagesArray.length
    }
  }

  selectImageBydot(id:any) {
    this.selectedImage = id
  }

  // end of slides

  public bookingform!: FormGroup

  getMyFormGroup() {
    this.bookingform = new FormGroup({
      checkIn: new FormControl("", Validators.required),
      checkOut: new FormControl("", Validators.required),
      userName: new FormControl("", Validators.required),
      userPhone: new FormControl("", Validators.required,),
    })
  }
  
  BookRoom() {
  this.booking.postBooking(
    {
      "id": 0,
      "roomID": this.routerId,
      "checkInDate": this.bookingform.controls['checkIn'].value,
      "checkOutDate": this.bookingform.controls['checkOut'].value,
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": this.bookingform.controls['userName'].value,
      "customerId": "string",
      "customerPhone": this.bookingform.controls['userPhone'].value
    }
    ).subscribe(
      (response) => {
        console.log('წარმატებული რეგისტრაცია:', response);
      },
      (error) => {
        console.error('რაღაც შეცდომაა:', error);
      }
    )

  }
}
