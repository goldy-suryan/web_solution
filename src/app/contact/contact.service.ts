import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()

export class ContactService {
    private url: string = "http://localhost/web_solution/server/db/contact.php";

    constructor( private http: Http ) {}

    sendContact(data) {
        let headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url, data, { headers: headers });
    }
}