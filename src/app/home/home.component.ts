import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderData:Array<object> = [
    {title: "Web Solution", description: "We Design & Code Websites", link: "Our Work" },
    {title: "Flex Slider, CSS Flexbox", description: "work on all modern browsers, Works on IE 10+", link: "See about us" }
  ];

  constructor() { }

  ngOnInit() {
    $(function () {
      $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
      });
    })



  }

}
