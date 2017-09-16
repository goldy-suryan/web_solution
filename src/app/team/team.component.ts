import { Component, OnInit } from '@angular/core';
import { Iteam } from "./team.interface";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Iteam[] = [
    { post: "Director", name: "Julia", delay: "0.3s" },
    { post: "Developer", name: "Mary", delay: "0.6s" },
    { post: "Manager", name: "Lynda", delay: "0.9s" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
