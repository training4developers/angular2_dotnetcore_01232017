import { Component } from "@angular/core";

import { AppHeader } from "./components/app-header.component";

@Component({
    selector: "main",
    template: `<app-header [header]="myHeader"></app-header>
    <input [(ngModel)]="myHeader2">`,
})
export class AppComponent {

    public myHeader = "Nergwen is kind, compassionate and caring!";
    public myHeader2 = "This is cool";

}


