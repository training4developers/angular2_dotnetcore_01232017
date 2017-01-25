import { Component } from "@angular/core";

import { AppHeader } from "./components/app-header.component";
import { ItemList } from "./components/item-list.component";

@Component({
    selector: "main",
    template: `
        <list-tool [header]="appHeader">
            <color-list-container [filterLabel]="colorFilterLabel"></color-list-container>
        </list-tool>
   `,
})
export class AppComponent {

    public appHeader: string = "Color List";
    public colorFilterLabel: string = "Color Filter!!!";
}
