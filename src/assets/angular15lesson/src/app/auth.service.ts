import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public userList: any = [
    {
      userFisrtName: "nikoloz",
      userLastName: "natenadze"
    },
    {
      userFisrtName: "dachi",
      userLastName: "samkhurashvili"
    },
    {
      userFisrtName: "irakli",
      userLastName: "lalebashvili"
    },
    {
      userFisrtName: "mikheil",
      userLastName: "giviashvili"
    },
  ]
}
