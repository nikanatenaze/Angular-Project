import { Component } from '@angular/core';

@Component({
  selector: 'app-another-details',
  templateUrl: './another-details.component.html',
  styleUrl: './another-details.component.css'
})
export class AnotherDetailsComponent {
  tab: string = "";


  onOverViewClick() {
    this.tab = "overview"
  }
  onFacilitiesClick() {
    this.tab = "facilities"
  }
  onExtraClick() {
    this.tab = "extra"
  }
}
