import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbar: string[] = [
    "contact", "portfolio", "pricing", "team", "about", "service", "home"
  ];
  constructor() { }

  ngOnInit() {
    $('.navbar-collapse a').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
  }

}
