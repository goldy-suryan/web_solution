import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing:any = [
    { basic : ["$20 per month", "100GB Storage", "1,000GB Transfer", "10 Bootstrap Themes", "24-hr support"]},
    { standard : ["$40 per month", "300GB Storage", "3,000GB Transfer", "30 Bootstrap Themes", "12-hr response"]},
    { professional : ["$60 per month", "600GB Storage", "6,000GB Transfer", "60 Premium Themes", "1-hr response"]},
    { advanced : ["$80 per month", "1,000GB Storage", "10TB Premium", "80 Premium Themes", "15-min response"]}
  ];
  constructor() { }

  ngOnInit() {
  }

}
