import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navbar: string[] = [
    "home", "service", "about", "team", "pricing", "portfolio", "contact"
  ].reverse();
  constructor() { }

  ngOnInit() {
    $('.navbar-collapse a').click(function () {
      $(".navbar-collapse").collapse('hide');
    });
  }

}
