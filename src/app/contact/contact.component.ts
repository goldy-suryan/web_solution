import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private title: String = "Web Solution";
  public value: Object = { name: "", email: "", message: "" };
  public response: String;

  constructor( private service: ContactService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.sendContact(this.value).subscribe(
      data => this.response = (<any>data)._body,
      err => err
    );
    this.value = { name: "", email: "", message: "" };
  }

}
