import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  ngOnInit(): void {
    this.getRouterInfo()
  }

  constructor(public routerInfo: ActivatedRoute) {}

  getRouterInfo() {
    this.routerInfo.queryParams.subscribe(data => {
      console.log(data);
    })
  }
}
