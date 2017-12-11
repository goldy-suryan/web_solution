import { Component, OnInit } from '@angular/core';

import { NewsletterService } from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public err: any;
  public value: Object = { email: "" };
  public response: any;
  
  constructor( private service: NewsletterService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.createNewsletter(this.value)
    .subscribe(
      data => this.response = (<any>data)._body,
      err => this.err = err
    );
    this.value = { email: "" };
  }

}
