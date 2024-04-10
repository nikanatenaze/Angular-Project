import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  constructor(public router: Router) {}
logout() {
localStorage.removeItem("admin")
this.router.navigate(["/"])
}

}
