import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public api: HttpClient) { }

  signin (data:any) {
    const Url = "https://api.everrest.educata.dev/auth/sign_in"
    return this.api.post(Url, data)
  }

  register(data:any) {
    const Url = "https://api.everrest.educata.dev/auth/sign_up"
    return this.api.post(Url, data)
  }
}
