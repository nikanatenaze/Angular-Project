import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor (public Auth: AuthService) {}
  public name:any = ""
  public email:any = ""
  public password:any = ""
  public userpicture:any = "https://i2.wp.com/www.cycat.io/wp-content/uploads/2018/10/Default-user-picture.jpg"
  register() {
    this.Auth.register(this.name, this.email, this.password).subscribe(
      (response:any) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
