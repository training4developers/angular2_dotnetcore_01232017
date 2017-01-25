import { Component } from "@angular/core";

import { AppHeader } from "./components/app-header.component";
import { ItemList } from "./components/item-list.component";

@Component({
    selector: "main",
    template: `
        <app-header [header]="appHeader"></app-header>
        <filtered-item-list [items]="colors"></filtered-item-list>`,
})
export class AppComponent {

    public appHeader: string = "Color List";
    public colors: string[] = ["red", "blue", "yellow", "brown", "black"];
}
