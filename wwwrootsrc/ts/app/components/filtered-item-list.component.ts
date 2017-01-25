import { Component, Input, OnInit } from "@angular/core";

import { ColorsSvc } from "../services/colors-svc";

@Component({
    providers: [ ColorsSvc ],
    selector: "filtered-item-list",
    template: `
        <filter-item-form
            (newFilterValue)="receivedNewFilterValue($event)">
        </filter-item-form>
        <item-list [items]="filteredItems"></item-list>
    `,
})
export class FilteredItemList implements OnInit {

    @Input()
    public items: string[] = [];
    public filteredItems: string[] = [];

    constructor(private colorsSvc: ColorsSvc) { }

    // private colorsSvc: ColorsSvc;
    // constructor(colorsSvc: ColorsSvc) {
    //     this.colorsSvc = colorsSvc;
    // }

    public receivedNewFilterValue(filterValue: string) {
        this.filteredItems = this.items.filter((item: string) =>
            item.includes(filterValue));
    }

    public ngOnInit() {
        this.items = this.filteredItems = this.colorsSvc.getColors();
    }

}