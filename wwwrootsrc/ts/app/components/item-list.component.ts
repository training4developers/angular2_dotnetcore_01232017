import { Component, Input } from "@angular/core";

@Component({
    selector: "item-list",
    template: `<ul>
        <li *ngFor="let item of items">
            {{item | myUppercase}}
        </li>
    </ul>
    <div>{{items | myLength}}</div>`,
})
export class ItemList {

    @Input()
    public items: string[] = [];

};
