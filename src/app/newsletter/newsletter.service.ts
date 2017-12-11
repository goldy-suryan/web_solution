import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class NewsletterService {

    private url: string = "http://localhost/web_solution/server/db/newsletter.php";
    constructor( private http: Http) {}

    createNewsletter(body) {
        var headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded');
        return this.http.post(this.url, body, { headers: headers });
    }

}