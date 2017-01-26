import { Component, OnInit } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable, Observer } from "rxjs";
import "rxjs";

@Component({
    selector: "main",
    template: `<form #fg="ngForm">

        <div>Valid: {{fg.valid}}</div>
        <div>Dirty: {{fg.dirty}}</div>
        <div>Data: {{fg.value | json}}</div>

        <div>
            <label for="widget-name-input">Widget Name:</label>
            <input type="text" id="widget-name-input" name="widgetNameInput"
                [(ngModel)]="widgetName" #widgetNameControl="ngModel" required>
            <span *ngIf="!widgetNameControl.valid">
                Please enter a widget name.
            </span>
        </div>

        <button type="button" (click)="sendForm()">Send</button>


    </form>`,
})
export class AppComponent implements OnInit {

    private widgetName: string;

    constructor(private http: Http) { }

    public sendForm() {
        console.log(this.widgetName);
    }

    public ngOnInit() {





    }
}
