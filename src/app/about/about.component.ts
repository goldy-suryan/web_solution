import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "About Web Solution";
  skills: any = [
    { skill: "Graphic Design", width: "100%" },
    { skill: "Multimedia", width: "80%" },
    { skill: "Web Design", width: "90%" },
    { skill: "Web Development", width: "70%" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
