import { Component } from "@angular/core";
import { AppStore } from "../shared/services/app-store";

@Component({
    selector: "main",
    template: `<item-list [items]="appStore.getState().colors"></item-list>
    <item-form (addColor)="appStore.addColor($event)"></item-form>`,
})
export class AppComponent {

    constructor(private appStore: AppStore) { }
}
