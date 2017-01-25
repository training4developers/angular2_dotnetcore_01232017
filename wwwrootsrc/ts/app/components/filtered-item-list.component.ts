import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "filtered-item-list",
    template: `
        <filter-item-form
            (newFilterValue)="receivedNewFilterValue($event)">
        </filter-item-form>
        <item-list [items]="filteredItems"></item-list>
    `
})
export class FilteredItemList implements OnInit {

    @Input()
    public items: string[] = [];
    public filteredItems: string[] = [];

    public receivedNewFilterValue(filterValue: string) {
        this.filteredItems = this.items.filter((item: string) =>
            item.includes(filterValue));
    }

    private ngOnInit() {
        this.filteredItems = this.items.concat();
    }

}