import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import "rxjs";

@Component({
    selector: "main",
    template: `<ul>
        <li *ngFor="let widgetName of widgetNames">{{widgetName}}</li>
    </ul>`,
})
export class AppComponent implements OnInit {

    private widgetNames: string[] = [];

    constructor(private http: Http) { }

    public ngOnInit() {

        const requestOptions = new RequestOptions();
        requestOptions.headers = new Headers({
            "Content-Type": "application/json",
        });

        this.http.post("/widgets", JSON.stringify({
            name: "Test Widget", description: "Test Widget Desc",
            color: "red", size: "small", quantity: 23, price: 12.34,
        }), requestOptions).toPromise()
            .then(() => this.http.get("/widgets").toPromise())
            .then((res) => res.json())
            .then((results) => {
                this.widgetNames =
                    results.map((widget: any) => widget.name);
            }).catch((err) => {
                console.log(err);
            });

    }
}
