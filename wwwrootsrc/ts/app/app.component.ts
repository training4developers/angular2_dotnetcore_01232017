import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable, Observer } from "rxjs";
import "rxjs";

@Component({
    selector: "main",
    template: `<ul>
        <li *ngFor="let widgetName of widgetNames">{{widgetName}}</li>
    </ul>
    <div>{{numbers | async}}</div>
    <button type="button">Click</button>`,
})
export class AppComponent implements OnInit {

    private widgetNames: string[] = [];

    private numbers: Observable<number>;

    constructor(private http: Http) { }

    public ngOnInit() {

        // Observable.fromEvent(document.querySelector("button"), "click").subscribe(() => {
        //     console.log("button clicked");
        // });

        this.numbers = Observable.create((observer: Observer<number>) => {

                const ws = new WebSocket("ws://localhost:3030");
                ws.addEventListener("message", (message) => {
                    observer.next(parseInt(message.data, 10));
                });

            });

       
            // .map((num) => num * 2)
            // .filter((num) => num > 20)
            // .subscribe((num) => console.log(num));


        // const requestOptions = new RequestOptions();
        // requestOptions.headers = new Headers({
        //     "Content-Type": "application/json",
        // });

        // this.http.post("/widgets", JSON.stringify({
        //     name: "Test Widget", description: "Test Widget Desc",
        //     color: "red", size: "small", quantity: 23, price: 12.34,
        // }), requestOptions).toPromise()
        //     .then(() => this.http.get("/widgets").toPromise())
        //     .then((res) => res.json())
        //     .then((results) => {
        //         this.widgetNames =
        //             results.map((widget: any) => widget.name);
        //     }).catch((err) => {
        //         console.log(err);
        //     });

        // this.http.get("/widgets")
        //     .map((res) => res.json())
        //     .map((widgets: any[]) => {
        //         return widgets.map((widget) => { 
        //             widget.created = new Date();
        //             return widget;
        //         });
        //     })
        //     .subscribe((results) => {
        //        console.log("final", results);
        //     });

    }
}
