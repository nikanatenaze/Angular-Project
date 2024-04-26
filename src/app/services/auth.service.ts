import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public api: HttpClient) { }

  signin (data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let email = data.value.email
    let password:any = data.value.password
    const body = { email, password}
    

    const Url = "https://api.everrest.educata.dev/auth/sign_in"
    return this.api.post(Url, body, { headers })
  }

  register(data:any): Observable<any> {

    console.log(data);
    
    let email = data.value.email
    let password = data.value.password
    let lastname = "asdasd"
    let firstname = "asdasd"

    // 
    const Url = "https://api.everrest.educata.dev/auth/sign_up"
    const body = {email, password, name}
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
    return this.api.post(Url, body, { headers })
  }
}
